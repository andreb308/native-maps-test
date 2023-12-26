import React, { useEffect, useState } from "react";
import { Scroller, BottomCard } from "../Style";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Animated, Dimensions, Platform, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 220;
import { CakeInfo } from "../Types";
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
let mapAnimation = new Animated.Value(0);

export default function BottomScroller() {
  const [data, setData] = useState<CakeInfo | null>(null);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const textResponse: CakeInfo = await fetch(
      "https://lace-fifth-dragonfly.glitch.me/"
    ).then((res) => res.json());
    setData(textResponse);
  };
  return (
    <Scroller
      contentInset={{
        top: 0,
        left: SPACING_FOR_CARD_INSET,
        bottom: 0,
        right: SPACING_FOR_CARD_INSET,
      }}
      contentContainerStyle={{
        paddingHorizontal:
          Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
      }}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: mapAnimation,
              },
            },
          },
        ],
        { useNativeDriver: true }
      )}
    >
      {data &&
        data.map((cake) => (
          <BottomCard key={cake.storeID}>
            <Icon name='cake' size={50} color='#5f5f5f'></Icon>

            <Text style={{ fontSize: 32 }}>{cake.storeName}</Text>
            <Text style={{ fontSize: 14 }}>{cake.city}</Text>
            <Text style={{ fontSize: 14 }}>{cake.flavorName}</Text>
          </BottomCard>
        ))}
    </Scroller>
  );
}
