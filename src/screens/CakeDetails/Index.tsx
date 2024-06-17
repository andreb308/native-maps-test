import React from "react";
import { RootStackParamList } from "../../../routes/stack.routes";
import { RouteProp } from "@react-navigation/native";
import StaticMap from "./Templates/StaticMap";
import { Dimensions, View } from "react-native";
import PriceConverter from "./Templates/PriceConverter";
import Ratings from "./Templates/Ratings";
import { StarRatingDisplay } from 'react-native-star-rating-widget'

type RouteProps = {
  route: RouteProp<RootStackParamList, "CakeDetails">;
};

export default function CakeDetails({ route }: RouteProps) {
  const {
    storeID,
    city,
    description,
    flavorName,
    latitude,
    longitude,
    price,
    rating,
    storeName,
    priceType,
    avgWeight,
  } = route.params.props;
  return (
    <Container>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <StoreName>{storeName}</StoreName>
        {/* <CityName>{city}</CityName> */}
      </View>

      <StarRatingDisplay rating={rating} color={colors.text} style={{ marginTop: -15, backgroundColor: colors.background, paddingHorizontal: 15, paddingVertical: 15, justifyContent: 'center', borderRadius: 10 }} />

      <StaticMap
        latitude={latitude}
        longitude={longitude}
        storeName={storeName}
      />

      <PriceConverter
        price={price}
        priceType={priceType}
        avgWeight={avgWeight}
      />

      <Ratings price={price} priceType={priceType} avgWeight={avgWeight} />
      <CakeDescription description={description} />
    </Container>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
import styled from "styled-components/native";
import CakeDescription from "./Templates/CakeDescription";
import colors from "../../../theme/colors";
import Constants from "expo-constants";
import { normalize } from "../../../util/normalize";

const deviceWidth = Dimensions.get("window").width;

const Container = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  flex: 1;
  background-color: #fffbda;
`;

const StoreName = styled.Text`
  color: ${colors.text};
  font-size: ${normalize(deviceWidth < 500 ? 45 : 36)}px;
  text-align: center;
  margin-top: ${Constants.statusBarHeight}px;
  font-weight: bold;
`;

const CityName = styled.Text`
  color: ${colors.text};
  font-size: 24px;
  text-align: center;
`;