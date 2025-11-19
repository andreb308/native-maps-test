import { View, Text, Dimensions, Platform } from "react-native";
import React from "react";
import {
  PriceConverterContainer,
  Price,
  PriceDesc,
  PriceDivider,
} from "../Style";

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
    <PriceConverterContainer>
      <Price variant="headlineSmall">
        {`R$${priceType === "/kg" ? price.toFixed(2).replace('.', ',') : pricePerKg.toFixed(2).replace('.', ',')
          }\n`}
        <PriceDesc variant="labelLarge">por quilo</PriceDesc>
      </Price>

      <PriceDivider />

      <Price variant="headlineSmall">
        {`R$${pricePer350g.toFixed(2).replace('.', ',')}\n`}
        <PriceDesc variant="labelLarge">por 350g</PriceDesc>
      </Price>

      <PriceDivider />

      <Price variant="headlineSmall">
        {`R$${priceType === "/fatia" ? price.toFixed(2).replace('.', ',') : pricePerSlice.toFixed(2).replace('.', ',')
          }\n`}
        <PriceDesc variant="labelLarge">por fatia</PriceDesc>
      </Price>
    </PriceConverterContainer>
  );
}
