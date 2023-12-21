import React from "react";
import {
  Container,
  Scroller,
  BottomCard,
} from "../Style";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Animated, Dimensions, Platform } from "react-native";
import { hardcodedCities } from "../../../../hardcodedCities";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
let mapAnimation = new Animated.Value(0);

export default function BottomScroller() {
  return (
    <Container>
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
        {hardcodedCities.map((city, index) => (
          <BottomCard key={index}>
            <Icon
              name="location-off"
              size={30}
              color="#5f5f5f"
              style={{
                flex: 3,
                width: "100%",
                height: "100%",
                alignSelf: "center",
              }}
            ></Icon>
          </BottomCard>
        ))}
      </Scroller>
    </Container>
  );
}
