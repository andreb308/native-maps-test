import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { useState, useEffect } from "react";
import { View, Image, Text, Alert } from "react-native";
import { Container, LyricContainer, Button, Input } from "./Style";
import { AILyricContextType, MackleProps } from "./Types";
import api from "../../../util/api";
import colors from "../../../theme/colors";

type RootTabParamList = {
  // NOT THE ONLY IMPLEMENTATION OF THIS! (Remember to edit all versions of this variable when altering)
  Map: undefined;
  Index: undefined;
};

type Props = MaterialBottomTabScreenProps<RootTabParamList, "Index">;

export default function AI_LyricScreen({ route, navigation }: Props) {
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
        "And I won't confess that I waited, but I let the lamp burn\nAs the men masqueraded, I hoped you'd return\nWith your feet on the ground, tell me all that you'd learned\n'Cause love's never lost when perspective is earned",
      title: "Peter by Taylor Swift",
      image:
        "https://images.genius.com/060181ac1b325992184cbe693e0318e1.1000x1000x1.png",
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
          style={{ textAlign: "center", fontSize: 24, marginHorizontal: 20 }}
        >
          {songData.info.title}
        </Text>

        {/* Letra */}
        <Text
          style={{ fontSize: 16, marginHorizontal: 20, fontStyle: "italic" }}
        >
          "{songData.info.lyrics}"
        </Text>
      </LyricContainer>

      <Input
        value={artistName}
        onChangeText={(text) => setArtistName(text)}
        onSubmitEditing={() => fetchLyric(artistName)}
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
        onPress={() => Alert.alert("Contexto", lyricContext)}
        style={{ fontSize: 16, marginHorizontal: 20, fontStyle: "italic", backgroundColor: colors.activeIndicatorBackground, padding: 10, borderRadius: 10 }}
      >
        {lyricContext}
      </Text>
      {lyricContext && (
        <Text
          style={{
            fontSize: 12,
            marginHorizontal: 20,
            fontStyle: "italic",
            textAlign: "center",
            position: "absolute",
            bottom: 10,
          }}
        >
          {
            "Explicações podem conter erros em canções recentes ou desconhecidas.\nTexto 100% gerado pelo Gemini 1.5 Flash by Google"
          }
        </Text>
      )}
    </Container>
  );
}
