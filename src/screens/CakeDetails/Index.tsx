import React from "react";
import { RootStackParamList } from "../../../routes/stack.routes";
import { RouteProp } from "@react-navigation/native";
import StaticMap from "./Templates/StaticMap";

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
      <View>
        <StoreName>{storeName}</StoreName>
        <CityName>{city}</CityName>
      </View>

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

      <View
        style={{
          // marginTop: 20,
          width: "90%",
          height: "20%",
          backgroundColor: "#D9D9D9",
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 15,
        }}
      ></View>

      {/* <CakeDescription style={{ textAlign: "center" }}>
        {description}
      </CakeDescription> */}
    </Container>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
import styled from "styled-components/native";
import { Text, View } from "react-native";
import PriceConverter from "./Templates/PriceConverter";

const Container = styled.View`
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  flex: 1;
`;

const StoreName = styled.Text`
  font-size: 45px;
  text-align: center;
  margin-top: 10%;
  font-weight: bold;
`;

const CityName = styled.Text`
  font-size: 24px;
  text-align: center;
`;

const CakeDescription = styled.Text``;
