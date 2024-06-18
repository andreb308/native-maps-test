import { View, Text, Platform, Alert } from "react-native";
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
          fontSize: moderateVerticalScale(18, 0.3),
          fontWeight: "bold",
          margin: 0,
          textAlign: "center",
        }}
      >
        Observações
      </Text>

      <Text
        numberOfLines={2}
        style={{
          color: colors.text,
          fontSize: moderateVerticalScale(14, 0.3),
          margin: 0,
          textAlign: "center",
        }}
        onPress={() => Alert.alert('Descrição', description)}
      >
        {description}
      </Text>
    </Container>
  );
}

import styled from "styled-components/native";
import { moderateVerticalScale } from "react-native-size-matters";

const Container = styled.View`
  width: 80%;
  background-color: ${colors.background};
  border-radius: 25px;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
  padding: 10px 20px;
  // Not joking when I say that removing this comment breaks the entire page.
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  ${Platform.OS === "android" && "elevation: 5;"}
`;
