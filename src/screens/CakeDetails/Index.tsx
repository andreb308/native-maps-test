import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "../../../routes/stack.routes";
import { RouteProp } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

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
        paddingTop: 20,
        flex: 1,
        gap: 10,
      }}
    >
      <Text
        style={{
          fontSize: 45,
          textAlign: "center",
          marginTop: "10%",
          fontWeight: "bold",
        }}
      >
        {storeName}
      </Text>
      <Text style={{ fontSize: 24, textAlign: "center" }}>{city}</Text>
      <View
        style={{
          width: "90%",
          height: "30%",
          marginTop: 50,
          borderRadius: 25,
          overflow: "hidden",
        }}
      >
        {/* <MapEmbed
          source={{
            html: `<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?q=${`${latitude},${longitude}`}&hl=es&z=14&amp;output=embed'></iframe>`,
          }}
        /> */}

        <MapView
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0008,
            longitudeDelta: 0.0008,
          }}
          style={{ width: "100%", height: "100%" }}
          zoomEnabled={false}
          scrollEnabled={false}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title={storeName}
          ></Marker>
        </MapView>
      </View>
      <Text style={{ textAlign: "center" }}>{description}</Text>
      {/* <Text style={{ textAlign: "center" }}>{latitude}</Text>
      <Text style={{ textAlign: "center" }}>{longitude}</Text> */}
    </View>
  );
}
