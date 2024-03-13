import { View, Text } from "react-native";
import React from "react";
import { CakeProps } from "../Map/Types";
import { RootStackParamList } from "../Map/Index";
import { RouteProp } from "@react-navigation/native";

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
  } = route.params.props;
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 100,
      }}
    >
      <Text style={{ fontSize: 72, textAlign: "center" }}>{storeName}</Text>
      <Text style={{ fontSize: 24, textAlign: "center" }}>{city}</Text>
      <Text style={{ textAlign: "center" }}>{description}</Text>
      <Text style={{ textAlign: "center" }}>{price}</Text>
    </View>
  );
}
