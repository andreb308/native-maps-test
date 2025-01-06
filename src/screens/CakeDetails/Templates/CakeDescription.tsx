import { View, Text, Platform, Alert } from "react-native";
import React from "react";
import colors from "../../../../theme/colors";

export default function CakeDescription({
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit itaque incidunt labore!",
  handlePress = () => {},
}: {
  description: string;
  handlePress: any;
}) {
  return (
    <Container onPress={handlePress}>
      <Text
        style={{
          color: colors.text,
          fontSize: moderateVerticalScale(18, 0.3),
          fontFamily: "Inter_700Bold",
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
          fontFamily: "Inter_500Medium",
        }}
      >
        {description}
      </Text>
    </Container>
  );
}

import styled from "styled-components/native";
import { moderateVerticalScale } from "react-native-size-matters";

const Container = styled.TouchableOpacity`
  width: 100%;
  max-width: 650px;
  background-color: ${colors.background};
  border-radius: 10px;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
  padding: 10px 20px;
  border: 2px solid ${colors.activeIndicatorBackground};
`;
