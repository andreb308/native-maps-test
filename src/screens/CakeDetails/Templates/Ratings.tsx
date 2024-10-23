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
      <Column>
        <Category>Tamanho</Category>
        <Rating>
          8<RatingDesc>/10</RatingDesc>
        </Rating>
      </Column>
      {/* <Divider /> */}

      <Column>
        <Category>Variedade</Category>
        <Rating>
          9<RatingDesc>/10</RatingDesc>
        </Rating>
      </Column>

      {/* <Divider /> */}

      <Column>
        <Category>Custo</Category>
        <Rating>
          10<RatingDesc>/10</RatingDesc>
        </Rating>
      </Column>
    </Container>
  );
}

import styled from "styled-components/native";
import colors from "../../../../theme/colors";
import { moderateVerticalScale } from "react-native-size-matters";

const Container = styled.View`
  width: 100%;
  max-width: 650px;
  height: 15%;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 20px; */
  flex-direction: row;
  gap: 15px;
`;

const Rating = styled.Text`
  text-align: center;
  font-size: ${moderateVerticalScale(36, 0.3)}px;
  font-weight: bold;
  color: ${colors.text};
  margin-top: 0;
  width: 100%;
`;

const Category = styled(Rating)`
  font-size: ${moderateVerticalScale(18, 0.3)}px;
`;
const RatingDesc = styled(Rating)`
  font-size: ${moderateVerticalScale(14, 0.3)}px;
`;

const Divider = styled.View`
  height: 70%;
  width: 2.5px;
  border-radius: 50px;
  background-color: #909090;
`;

const Column = styled.View`
  height: 100%;
  width: 30%;
  max-width: 150px;
  max-height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  background-color: #ffec9e;
  border-radius: 10px;
  border: 2px solid ${colors.activeIndicatorBackground};
`;
