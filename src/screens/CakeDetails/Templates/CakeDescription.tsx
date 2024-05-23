import { View, Text, Platform } from "react-native";
import React from "react";
import colors from "../../../../theme/colors";

export default function CakeDescription({
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit itaque incidunt labore!",
}: {
  description: string;
}) {
  return (
    <Container>
      <Text
        style={{
          color: colors.text,
          fontSize: 20,
          fontWeight: "bold",
          margin: 0,
          textAlign: "center",
        }}
      >
        Observações
      </Text>

      <Text
        style={{
          color: colors.text,
          margin: 0,
          textAlign: "center",
        }}
      >
        {description}
      </Text>
    </Container>
  );
}

import styled from "styled-components/native";

const Container = styled.View`
  /* marginTop: 20, */
  width: 80%;
  height: 10%;
  background-color: ${colors.background};
  border-radius: 25px;
  /* alignItems: "center", */
  justify-content: flex-start;
  flex-direction: column;
  /* gap: 15px; */
  padding: 5px 20px;
  // Not joking when I say that removing this comment breaks the entire page.
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  ${Platform.OS === "android" && "elevation: 5;"}
`;
