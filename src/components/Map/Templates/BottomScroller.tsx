import Icon from "react-native-vector-icons/MaterialIcons";
import { Animated, Dimensions, Platform, Text, View } from "react-native";

import { useAppContext } from "../../AppContext";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 100;
const CARD_WIDTH = width * 0.85;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
let mapAnimation = new Animated.Value(0);

export default function BottomScroller() {
  const { data, handleFetch, mapRef } = useAppContext();

  type Coords = {
    latitude: number;
    longitude: number;
  };
  const handleMapMove = (obj: Coords) => {
    mapRef.current?.animateToRegion(
      { ...obj, latitudeDelta: 0.002, longitudeDelta: 0.002 },
      3000
    );
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
          <BottomCard
            key={cake.storeID}
            onPress={() =>
              handleMapMove({
                latitude: cake.latitude,
                longitude: cake.longitude,
              })
            }
          >
            <FlexColumn>
              <StoreName>{cake.storeName}</StoreName>
              <StoreDesc numberOfLines={2}>{cake.description}</StoreDesc>
            </FlexColumn>
            <Text></Text>
            <PriceContainer>
              <Price>R${cake.price.toFixed(2)}</Price>
            </PriceContainer>
          </BottomCard>
        ))}
    </Scroller>
  );
}

/********************************************************/
import styled from "styled-components/native";

const Scroller = styled(Animated.ScrollView).attrs({
  horizontal: true,
  scrollEventThrottle: 1,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  snapToInterval: CARD_WIDTH + 20,
})`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 10px 0;
`;

const BottomCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #e4ffdb;
  border-radius: 25px;
  /* border-top-right-radius: 50px; */
  margin: 0 10px;
  box-shadow: 2px -2px 5px rgba(0, 0, 0, 0.3); /* Standard CSS box-shadow */
  border: 1px solid #ddd;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  padding: 10px 20px;
  overflow: hidden;
`;

const FlexColumn = styled.View`
  width: 60%;
  height: 90%;
  flex-direction: column;
  position: relative;
  /* background-color: pink; */
`;

const StoreName = styled.Text`
  height: 50%;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  /* text-wrap: ; */
`;

const StoreDesc = styled.Text`
  height: 50%;
  text-align: center;
  font-size: 12px;
`;

const PriceContainer = styled.View`
padding: 0 10px;
  width: 40%;
  height: 90%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #259e3f;
`;
