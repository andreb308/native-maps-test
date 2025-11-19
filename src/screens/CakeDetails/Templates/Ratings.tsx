import { View, Text, Dimensions, Platform } from "react-native";
import React from "react";
import {
  RatingsContainer,
  Rating,
  Category,
  RatingDesc,
  Column,
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
    <RatingsContainer>
      <Column>
        <Category variant="titleLarge">Tamanho</Category>
        <Rating variant="displayMedium">
          8<RatingDesc variant="titleMedium">/10</RatingDesc>
        </Rating>
      </Column>
      {/* <Divider /> */}

      <Column>
        <Category variant="titleLarge">Variedade</Category>
        <Rating variant="displayMedium">
          9<RatingDesc variant="titleMedium">/10</RatingDesc>
        </Rating>
      </Column>

      {/* <Divider /> */}

      <Column>
        <Category variant="titleLarge">Custo</Category>
        <Rating variant="displayMedium">
          10<RatingDesc variant="titleMedium">/10</RatingDesc>
        </Rating>
      </Column>
    </RatingsContainer>
  );
}
