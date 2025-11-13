import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect, useRef } from "react";
import { View, Image, Platform } from "react-native";
import { Container, LyricContainer, Button, Input } from "./Style";
import { AILyricContextType, MackleProps } from "./Types";
import api from "../../../util/api";
import colors from "../../../theme/colors";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet/src";

type RootTabParamList = {
  // NOT THE ONLY IMPLEMENTATION OF THIS! (Remember to edit all versions of this variable when altering)
  Map: undefined;
  Index: undefined;
};

type Props = BottomTabScreenProps<RootTabParamList, "Index">;

export default function AI_LyricScreen({ route, navigation }: Props) {
  const bottomSheetModalRef = useRef<BottomSheetMethods>(null);
  useEffect(() => {
    explainLyric();
  }, []);

  const fetchLyric = async (artist: string) => {
    try {
      const data = await fetch(
        `https://lyric.mackle.im/api?artist=${artist}`
      ).then((response) => response.json());

      if (data.status === 500) throw new Error("Erro."); // Caso não encontre nenhuma letra do artista digitado, lança um erro e não atualiza o songData.
      setSongData(data);
      setLyricContext("");
    } catch (error) {
      alert(`Houve um problema na busca por ${artist}.`); // Exibe um alerta pop-up com o erro.
      // setArtistName("");
    }
  };
  const explainLyric = async () => {
    let [title, artist] = songData.info.title.split("by");
    const lyric = songData.info.lyrics;
    artist = artist?.trim();
    title = title?.trim();

    if (title === "Song Title" && artistName === "") {
      alert("Por favor, busque uma música antes de pedir uma análise.");
      return;
    }

    try {
      const response = await api
        .get<AILyricContextType>("/", { params: { title, artist, lyric } })
        .then((response) => response.data);

      if (response.status === 422) {
        alert("Houve um erro na busca.\n\nERR:PROMPT_MISSING");
        return;
      }
      if (response.status === 500) {
        alert("Houve um erro na busca.\n\nERR:INTERNAL_SERVER_ERROR");
        return;
      }
      if (response.status === 502) {
        alert(
          "Uma trava de segurança no servidor foi ativada. Tente novamente ou busque outra letra.\n\nERR:BAD_GATEWAY"
        );
        return;
      }
      if (response.status === 200) {
        setLyricContext(
          response.response.candidates[0]!.content.parts[0]!.text
        );
      }
    } catch (error) {
      alert(
        `Houve um problema.\n\nNão foi possível buscar o servidor.\n\n${error}`
      ); // Exibe um alerta pop-up com o erro.
      // setArtistName("");
    }
  };

  const [artistName, setArtistName] = useState("");
  const [songData, setSongData] = useState<MackleProps>({
    // Inicializando com dados "placeholder" para evitar erro de tipagem.
    status: 200,
    info: {
      lyrics:
        "And you call me up again just to break me like a promise\nSo casually cruel in the name of bein' honest\nI'm a crumpled-up piece of paper lyin' here\n'Cause I remember it all, all, all... too well.",
      title: "All Too Well (10 Minute Version)\nby Taylor Swift",
      image:
        "https://t2.genius.com/unsafe/484x484/https%3A%2F%2Fimages.genius.com%2F9dd4ba749dd51d39d7b56b67b9cc3777.1000x1000x1.jpg",
    },
  });
  const [lyricContext, setLyricContext] = useState("");

  return (
    <Container>
      <LyricContainer>
        {/* Imagem da música */}
        <Image
          source={{ uri: songData.info.image }}
          width={250}
          height={250}
          borderRadius={10}
        ></Image>

        {/* Título */}
        <Text
          variant="headlineMedium"
          style={{ textAlign: "center", marginHorizontal: 20 }}
        >
          {songData.info.title}
        </Text>

        {/* Letra */}
        <Text
          variant="titleMedium"
          style={{ marginHorizontal: 30, fontStyle: "italic" }}
        >
          "{songData.info.lyrics}"
        </Text>
      </LyricContainer>

      <Input
        placeholder="Digite um artista (ex: Taylor Swift)"
        cursorColor="grey"
        returnKeyType="search"
        value={artistName}
        onChangeText={(text) => setArtistName(text)}
        onSubmitEditing={() => fetchLyric(artistName)}
        underlineColorAndroid="#ffffff00"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 15,
          width: "100%",
          marginVertical: 20,
        }}
      >
        <Button onPress={() => fetchLyric(artistName)}>
          <Text>Buscar</Text>
        </Button>
        <Button onPress={() => explainLyric()}>
          <Text>Explicar com IA ✨</Text>
        </Button>
      </View>
      <Text
        numberOfLines={5}
        onPress={() => bottomSheetModalRef.current?.open()}
        style={{
          marginHorizontal: 20,
          fontStyle: "italic",
          backgroundColor: colors.activeIndicatorBackground,
          padding: 10,
          borderRadius: 10,
        }}
        variant="bodyLarge"
      >
        {lyricContext}
      </Text>
      {lyricContext && (
        <Text
          style={{
            marginHorizontal: 20,
            fontStyle: "italic",
            textAlign: "center",
            position: "absolute",
            bottom: 10,
          }}
        >
          {
            "Explicações podem conter erros em canções recentes ou desconhecidas.\nTexto 100% gerado pelo Gemini 2.5 Flash by Google"
          }
        </Text>
      )}
      <BottomSheet
        animationType="spring"
        backdropMaskColor="#00000088"
        height="80%"
        ref={bottomSheetModalRef}
        style={{
          backgroundColor: colors.background,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <ModalTitle variant="headlineLarge">
            {songData.info.title.split("\n").join(" ")}
          </ModalTitle>
          <ModalDesc variant="titleMedium">{lyricContext.trim()}</ModalDesc>
        </View>
      </BottomSheet>
    </Container>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import styled from "@emotion/native";
import { moderateVerticalScale } from "react-native-size-matters";
import { InterText } from "../../../theme/globalStyle";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Text } from "react-native-paper";

export const ModalDesc = styled(Text)`
  color: ${colors.text};
  text-align: justify;
  font-size: ${moderateVerticalScale(18, 0.3)}px;
  width: 90%;
  margin: 0 20px 0;
  font-family: "Inter_600SemiBold";
  max-width: 750px;
  background-color: ${colors.activeIndicatorBackground};
  padding: 15px;
  margin-top: 20px;
  border-radius: 25px;
`;

export const ModalTitle = styled(Text)`
  color: ${colors.text};
  font-family: "Inter_700Bold";
  text-align: center;
  /* font-weight: bold; */
  font-size: ${moderateVerticalScale(26, 0.3)}px;
  /* margin-top: ${moderateVerticalScale(20, 0.3)}px; */
  margin-left: 8px;
  margin-right: 8px;
  /* position: absolute;
  top: 0px; */
  max-width: 650px;
`;
