import { Dimensions, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

import { useAppContext } from "../../AppContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../routes/stack.routes.js";
import colors from "../../../../theme/colors";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import React, { useState } from "react";
import { LatLng } from "react-native-maps";
import {
  BottomCard,
  FlexColumn,
  StoreName,
  StoreDesc,
  PriceContainer,
  Price,
  PriceType,
  CARD_HEIGHT,
} from "../Style";

const { width } = Dimensions.get("window");

export default function BottomScroller() {
  const { data, handleFetch, mapRef } = useAppContext();
  const [loop, setLoop] = useState(true);
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "MapView">>();

  const handleMapMove = (obj: LatLng) => {
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
              activeOpacity={0.7}
              loop={loop}
              onLongPress={() => setLoop((l) => !l)}
              key={item.storeID}
              onPress={() => {
                item.storeID !== -1 &&
                  navigation.navigate("CakeDetails", { props: item });
              }}
            >
              <FlexColumn>
                <StoreName variant="headlineSmall">{item.storeName}</StoreName>
                <StoreDesc variant="bodySmall" numberOfLines={2}>{item.description}</StoreDesc>
              </FlexColumn>
              <PriceContainer>
                <Price variant="headlineSmall">
                  R${item.price.toFixed(2)}
                  <PriceType variant="labelSmall" > {item.priceType}</PriceType>
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
