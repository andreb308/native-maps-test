import { Dimensions, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

import { useAppContext } from "../../AppContext";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 100;
const CARD_WIDTH = width * 0.85;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default function BottomScroller() {
  const { data, handleFetch, mapRef } = useAppContext();
  const [loop, setLoop] = useState(true);
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "MapView">>();

  type Coords = {
    latitude: number;
    longitude: number;
  };
  const handleMapMove = (obj: Coords) => {
    mapRef.current?.animateCamera({
      center: { ...obj },
      pitch: 30,
      // heading: 20,
      zoom: 18,
    });
  };
  return (
    <>
      <View style={{ width: "100%", height: CARD_HEIGHT, marginBottom: 30 }}>
        <Carousel
          loop
          width={width}
          height={1.3 * CARD_HEIGHT}
          autoPlay={loop}
          autoPlayInterval={5000}
          scrollAnimationDuration={1000}
          data={data}
          onSnapToItem={(index) =>
            handleMapMove({
              latitude: data[index]!.latitude,
              longitude: data[index]!.longitude,
            })
          }
          renderItem={({ item }) => (
            <BottomCard
              loop={loop}
              onLongPress={() => setLoop((l) => !l)}
              key={item.storeID}
              onPress={() => {
                item.storeID !== -1 &&
                  navigation.navigate("CakeDetails", { props: item });
              }}
            >
              <FlexColumn>
                <StoreName>{item.storeName}</StoreName>
                <StoreDesc numberOfLines={2}>{item.description}</StoreDesc>
              </FlexColumn>
              <PriceContainer>
                <Price>
                  R${item.price.toFixed(2)}
                  <PriceType> {item.priceType}</PriceType>
                </Price>
                <StarRatingDisplay
                  style={{
                    height: "60%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  starStyle={{ marginHorizontal: 0 }}
                  rating={item.rating}
                  color={colors.text}
                  starSize={20}
                />
              </PriceContainer>
            </BottomCard>
          )}
        />
      </View>
    </>
  );
}

/********************************************************/
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../routes/stack.routes.js";
import colors from "../../../../theme/colors";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import React, { useState } from "react";
import { InterText } from "../../../../theme/globalStyle";

const BottomCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<{ loop: boolean }>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #fffbda;
  border-radius: 10px;
  /* border-top-right-radius: 50px; */
  margin: 0 10px;
  box-shadow: 2px -2px 5px rgba(0, 0, 0, 0.3); /* Standard CSS box-shadow */
  border: 2px ${(p) => (p.loop ? "solid" : "dashed")} ${colors.activeIndicatorBackground};
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  padding: 10px 20px;
  margin-left: ${SPACING_FOR_CARD_INSET}px;
  overflow: hidden;
`;

const FlexColumn = styled.View`
  width: 60%;
  height: 90%;
  flex-direction: column;
  position: relative;
  /* background-color: pink; */
`;

const StoreName = styled(InterText)`
  height: 50%;
  font-family: "Inter_700Bold";
  /* font-weight: 700; */
  font-size: 26px;
  text-align: center;
`;

const StoreDesc = styled(InterText)`
  height: 50%;
  text-align: center;
  font-size: 12px;
`;

const PriceContainer = styled.View`
  /* padding: 0 10px; */
  width: 40%;
  height: 90%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const Price = styled(InterText)`
  /* width: 100%; */
  height: 40%;
  text-align: center;
  font-size: 26px;
  font-family: "Inter_700Bold";
  color: ${colors.text};
`;

const PriceType = styled(InterText)`
  font-size: 12px;
  /* width: 100%; */
  /* text-align: right; */
  font-family: "Inter_700Bold";
  color: ${colors.text};
`;
