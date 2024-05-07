import { View, Text, Platform } from "react-native";
import React from "react";
import UnorderedList from "../../../../util/UnorderedList";
import colors from "../../../../theme/colors";

export default function CakeFlavors() {
  return (
    <Container>
      <Text
        style={{
          color: colors.text,
          fontSize: 24,
          fontWeight: "bold",
          margin: 0,
          textAlign: "center",
        }}
      >
        Sabores
      </Text>

      <UnorderedList
        texts={["Teste", "Testando", "Testei"]}
        color={colors.text}
      ></UnorderedList>
    </Container>
  );
}

import styled from "styled-components/native";

const Container = styled.View`
  /* marginTop: 20, */
  width: 40%;
  height: 100%;
  background-color: ${colors.background};
  border-radius: 25px;
  /* alignItems: "center", */
  /* justifyContent: "center", */
  flex-direction: column;
  gap: 15px;
  padding: 10px 20px;
  // Not joking when I say that removing this comment breaks the entire page.
  box-shadow: 20px 20px 20px 10px rgba(0, 0, 0, 1);
  ${Platform.OS === "android" && "elevation: 5;"}
`;
