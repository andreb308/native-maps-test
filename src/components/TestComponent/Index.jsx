import { Text } from "react-native";
import React, { useState } from "react";

import { Container, Title, Input } from "./Style";

export default function Index({ navigation }) {
  const [texto, setTexto] = useState("");

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
