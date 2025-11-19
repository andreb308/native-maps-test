import React, { useRef } from "react";
import { RootStackParamList } from "../../../routes/stack.routes";
import { RouteProp } from "@react-navigation/native";
import StaticMap from "./Templates/StaticMap";
import { View } from "react-native";
import PriceConverter from "./Templates/PriceConverter";
import Ratings from "./Templates/Ratings";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet/src";
import colors from "../../../theme/colors";
import CakeDescription from "./Templates/CakeDescription";
import {
  Container,
  StoreName,
  CityName,
  ModalDesc,
  ModalTitle,
} from "./Style";

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

  const bottomSheetModalRef = useRef<BottomSheetMethods>(null);

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.open();
  };

  const handleSheetChanges = (index: number) => {
    console.log("handleSheetChanges", index);
  };

  const snapPoints = ["25%", "45%"];
  return (
    <Container>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <StoreName>{storeName}</StoreName>
        {/* <CityName>{city}</CityName> */}
      </View>

      <StarRatingDisplay
        rating={rating}
        color={colors.text}
        style={{
          backgroundColor: colors.background,
          paddingHorizontal: 15,
          paddingVertical: 15,
          justifyContent: "center",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: colors.activeIndicatorBackground,
        }}
      />

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
      <CakeDescription
        description={description}
        handlePress={handlePresentModalPress}
      />

      <BottomSheet
        animationType="spring"
        backdropMaskColor="#00000088"
        height="40%"
        ref={bottomSheetModalRef}

        style={{
          backgroundColor: colors.background,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <ModalTitle>Observações</ModalTitle>
          <ModalDesc>{description}</ModalDesc>
        </View>
      </BottomSheet>
    </Container>
  );
}
