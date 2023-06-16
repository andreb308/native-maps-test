import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

import { Container, Title, Input } from "./Style";

export default function Index() {
  const [texto, setTexto] = useState();

  return (
    <Container>
      {/* Text + Input Container */}
      <Title onPress={() => setTexto("Cliclou")}>App Title</Title>
      <Input onChangeText={(texto) => setTexto(texto)} value={texto} />
      <Text style={{ color: "white", fontSize: 20 }}>{texto}</Text>
    </Container>
  );
}
