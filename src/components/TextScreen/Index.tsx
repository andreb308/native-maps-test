import { Text } from "react-native";
import React, { useContext, useState } from "react";
import { Container, Title, Input } from "./Style";

import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { useAppContext } from "../AppContext";

type RootTabParamList = {
  // NOT THE ONLY IMPLEMENTATION OF THIS! (Remember to edit all versions of this variable when altering)
  Map: undefined;
  Index: undefined;
};

type Props = MaterialBottomTabScreenProps<RootTabParamList, "Index">;

export default function Index({ route, navigation }: Props) {
  const { texto, setTexto } = useAppContext()

  return (
    <Container>
      {/* Text + Input Container */}
      <Title onPress={() => setTexto("Cliclou")}>{"Título"}</Title>

      <Input
        onChangeText={(texto) => setTexto(texto)}
        value={texto}
        onSubmitEditing={() => navigation.navigate("Map")}
      />
      <Text style={{ color: "white", fontSize: 12, marginBottom: 50 }}>
        Pressione 'Enter' para ver o mapa automaticamente
      </Text>

      <Text style={{ color: "white", fontSize: 20 }}>{texto}</Text>
    </Container>
  );
}
