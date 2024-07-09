import React, { useRef } from "react";
import { RootStackParamList } from "../../../routes/stack.routes";
import { RouteProp } from "@react-navigation/native";
import StaticMap from "./Templates/StaticMap";
import { Dimensions, Text, View } from "react-native";
import PriceConverter from "./Templates/PriceConverter";
import Ratings from "./Templates/Ratings";
import { StarRatingDisplay } from "react-native-star-rating-widget";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

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

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleSheetChanges = (index: number) => {
    console.log("handleSheetChanges", index);
  };

  const snapPoints = ["25%", "45%"];
  return (
    <Container>
      <BottomSheetModalProvider>
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

        <BottomSheetModal
          handleStyle={{
            borderTopLeftRadius: 250,
            borderTopRightRadius: 250,
            backgroundColor: colors.activeIndicatorBackground,
          }}
          // style={{maxWidth: 650}}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <BottomSheetScrollView
            contentContainerStyle={{
              alignItems: "center",
              backgroundColor: colors.activeIndicatorBackground,
              justifyContent: "center",
              paddingTop: verticalScale(75),
              minHeight: "100%",
            }}
          >
            <ModalTitle>Observações</ModalTitle>
            <ModalDesc>{description}</ModalDesc>
          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
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

const Container = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
  gap: ${verticalScale(16)}px;
  padding-top: 20px;
  flex: 1;
  background-color: #fffbda;
`;

const StoreName = styled.Text`
  color: ${colors.text};
  font-size: ${moderateScale(36)}px;
  text-align: center;
  margin-top: ${Constants.statusBarHeight}px;
  font-weight: bold;
`;

const CityName = styled.Text`
  color: ${colors.text};
  font-size: 24px;
  text-align: center;
`;

const ModalDesc = styled.Text`
  color: ${colors.text};
  text-align: center;
  font-size: ${moderateVerticalScale(24, 0.3)}px;
  margin: 0 20px 0;
  font-weight: 500;
  max-width: 750px;
  background-color: ${colors.activeIndicatorBackground} ;
  padding: 15px;
  margin-top: 10px;
  border-radius: 10px;
`;

const ModalTitle = styled(StoreName)`
  font-size: ${moderateVerticalScale(40, 0.3)}px;
  margin-top: ${moderateVerticalScale(30, 0.3)}px;
  position: absolute;
  top: 0px;
  max-width: 650px;
`;
