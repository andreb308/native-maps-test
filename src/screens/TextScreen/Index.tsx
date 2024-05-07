import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { useState, useEffect } from "react";
import { Image, Text } from "react-native";

type RootTabParamList = {
  // NOT THE ONLY IMPLEMENTATION OF THIS! (Remember to edit all versions of this variable when altering)
  Map: undefined;
  Index: undefined;
};

type Props = MaterialBottomTabScreenProps<RootTabParamList, "Index">;

export default function Index({ route, navigation }: Props) {
  useEffect(() => {
    fetchLyric("Taylor Swift");
  }, []);

  const fetchLyric = async (artist: string) => {
    try {
      const data = await fetch(
        `https://lyric.mackle.im/api?artist=${artist}`
      ).then((response) => response.json());

      if (data.status === 500) throw new Error("Erro."); // Caso não encontre nenhuma letra do artista digitado, lança um erro e não atualiza o songData.
      setSongData(data);
    } catch (error) {
      alert(`Houve um problema.\n\nO artista '${artist}' não foi encontrado.`); // Exibe um alerta pop-up com o erro.
      setArtistName("");
    }
  };

  const [artistName, setArtistName] = useState("");
  const [songData, setSongData] = useState<MackleProps>({
    // Inicializando com dados "placeholder" para evitar erro de tipagem.
    status: 200,
    info: {
      lyrics:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas tenetur debitis placeat magnam!",
      title: "Song Title by Artist",
      image: "https://cdn2.thecatapi.com/images/MjAyODE3NQ.jpg",
    },
  });

  return (
    <Container>
      <LyricContainer>
        {/* Imagem da música */}
        <Image
          source={{ uri: songData.info.image }}
          width={250}
          height={250}
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

      <Button onPress={() => fetchLyric(artistName)}>
        <Text>Buscar</Text>
      </Button>
    </Container>
  );
}

/******************************************************************/
import styled from "styled-components/native";
import colors from "../../../theme/colors";

const Container = styled.View`
  gap: 20px;
  flex: 1;
  background-color: #fffbda;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const LyricContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.TouchableOpacity`
  font-weight: bold;
  font-size: 16px;
  color: black;
  /* background: linear-gradient(90deg, #0066cc 0%, #c500cc 100%); */
  padding: 10px 30px;
  border: 2px solid #aaaaaa;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.TextInput.attrs({
  placeholder: "Digite um artista (ex: Taylor Swift)",
  cursorColor: "grey",
  returnKeyType: "search",
})`
  background-color: #fff;
  position: absolute;
  top: 0%;
  width: 80%;
  height: 60px;
  border-radius: 100px;
  position: relative;
  padding-left: 50px;
  border: 2px solid #eaeaea;
`;

/******************************************************************/

interface MackleProps {
  status: 200;
  info: {
    lyrics: string;
    title: string;
    image: string;
  };
}

interface MackleErrorProps {
  status: 500;
  info: {};
}
