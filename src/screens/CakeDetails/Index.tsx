import React, { useRef } from "react";
import { RootStackParamList } from "../../../routes/stack.routes";
import { RouteProp } from "@react-navigation/native";
import StaticMap from "./Templates/StaticMap";
import { View } from "react-native";
import PriceConverter from "./Templates/PriceConverter";
import Ratings from "./Templates/Ratings";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet/src";

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
          marginTop: -15,
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////
import styled from "styled-components/native";
import CakeDescription from "./Templates/CakeDescription";
import colors from "../../../theme/colors";
import Constants from "expo-constants";
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from "react-native-size-matters";
import { InterText } from "../../../theme/globalStyle";

const Container = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
  gap: ${verticalScale(16)}px;
  padding-top: 20px;
  flex: 1;
  background-color: #fffbda;
`;

const StoreName = styled(InterText)`
  color: ${colors.text};
  font-size: ${moderateScale(34)}px;
  font-family: "Inter_700Bold";
  text-align: center;
  margin-top: ${Constants.statusBarHeight}px;
  /* font-weight: bold; */
`;

const CityName = styled(InterText)`
  color: ${colors.text};
  font-size: 24px;
  text-align: center;
`;

const ModalDesc = styled(InterText)`
  color: ${colors.text};
  text-align: center;
  font-size: ${moderateVerticalScale(22, 0.3)}px;
  width: 90%;
  margin: 0 20px 0;
  font-family: "Inter_600SemiBold";
  max-width: 750px;
  background-color: ${colors.activeIndicatorBackground};
  padding: 15px;
  margin-top: 20px;
  border-radius: 25px;
`;

const ModalTitle = styled(StoreName)`
  font-size: ${moderateVerticalScale(40, 0.3)}px;
  margin-top: ${moderateVerticalScale(20, 0.3)}px;
  /* position: absolute;
  top: 0px; */
  max-width: 650px;
`;
