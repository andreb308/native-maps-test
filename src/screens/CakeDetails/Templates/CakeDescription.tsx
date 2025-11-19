import { View, Text, Platform, Alert } from "react-native";
import React from "react";
import colors from "../../../../theme/colors";
import { moderateVerticalScale } from "react-native-size-matters";
import { DescriptionContainer } from "../Style";

export default function CakeDescription({
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit itaque incidunt labore!",
  handlePress = () => { },
}: {
  description: string;
  handlePress: any;
}) {
  return (
    <DescriptionContainer onPress={handlePress}>
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
    </DescriptionContainer>
  );
}
