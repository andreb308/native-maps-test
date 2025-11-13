import { View, Text, Dimensions, Platform } from "react-native";
import React from "react";

const deviceWidth = Dimensions.get("window").width;

type PriceConverterProps = {
  price: number;
  priceType: "/un" | "/kg" | "/fatia";
  avgWeight: number;
};

export default function PriceConverter({
  price,
  priceType,
  avgWeight,
}: PriceConverterProps) {
  /*
   *
   * Se o valor recebido for em quilo, fazer conversão para 350g e exibir o valor por 350g
   * Se o valor recebido for de 350g, converter para quilo e exibir o valor por quilo
   *
   */
  let pricePerKg = 0;

  if (priceType === "/kg") {
    pricePerKg = price;
  } else {
    pricePerKg = price / avgWeight;
  }

  const pricePer350g = 0.35 * pricePerKg;
  const pricePerSlice = 0.05 * pricePerKg;

  return (
    <Container>
      <Price variant="headlineSmall">
        {`R$${
          priceType === "/kg" ? price.toFixed(2).replace('.', ',') : pricePerKg.toFixed(2).replace('.', ',')
        }\n`}
        <PriceDesc variant="labelLarge">por quilo</PriceDesc>
      </Price>

      <Divider />

      <Price variant="headlineSmall">
        {`R$${pricePer350g.toFixed(2).replace('.', ',')}\n`}
        <PriceDesc variant="labelLarge">por 350g</PriceDesc>
      </Price>

      <Divider />

      <Price variant="headlineSmall">
        {`R$${
          priceType === "/fatia" ? price.toFixed(2).replace('.', ',') : pricePerSlice.toFixed(2).replace('.', ',')
        }\n`}
        <PriceDesc variant="labelLarge">por fatia</PriceDesc>
      </Price>
    </Container>
  );
}

import styled from "@emotion/native";
import colors from "../../../../theme/colors";
import { moderateVerticalScale } from "react-native-size-matters";
import { InterText } from "../../../../theme/globalStyle";

const Container = styled.View`
  width: 100%;
  max-width: 650px;
  height: 12.5%;
  max-height: 120px;
  background-color: #ffec9e;
  border-radius: 10px;
  border: 2px solid ${colors.activeIndicatorBackground};
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  flex-direction: row;
  gap: 15px;
`;

const Price = styled(InterText)`
  text-align: center;
  font-size: ${moderateVerticalScale(24, 0.3)}px;
  /* Suggested code may be subject to a license. Learn more: ~LicenseLog:2955892092. */
  font-family: "Inter_700Bold";
  color: ${colors.text};
`;

const PriceDesc = styled(Price)`
  font-family: "Inter_600SemiBold";
  font-size: ${moderateVerticalScale(16, 0.3)}px;
`;

const Divider = styled.View`
  height: 70%;
  width: 2.5px;
  border-radius: 50px;
  background-color: #909090;
`;
