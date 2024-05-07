import { Animated, Dimensions, Platform, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

// import { normalize } from "../../../../util/normalize.js";

import { useAppContext } from "../../AppContext";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 100;
const CARD_WIDTH = width * 0.85;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
// let mapAnimation = new Animated.Value(0);

export default function BottomScroller() {
  const { data, handleFetch, mapRef } = useAppContext();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "MapView">>();

  type Coords = {
    latitude: number;
    longitude: number;
  };
  const handleMapMove = (obj: Coords) => {
    mapRef.current?.animateToRegion(
      { ...obj, latitudeDelta: 0.002, longitudeDelta: 0.002 },
      2000
    );
  };
  return (
    <>
      <Carousel
        loop
        width={width}
        height={130}
        autoPlay={true}
        autoPlayInterval={5000}
        scrollAnimationDuration={1000}
        data={data}
        onSnapToItem={(index) =>
          handleMapMove({
            latitude: data[index]!.latitude,
            longitude: data[index]!.longitude,
          })
        }
        renderItem={({ item, index }) => (
          <BottomCard
            key={item.storeID}
            onPress={() => {
              navigation.navigate("CakeDetails", { props: item });
            }}
          >
            <FlexColumn>
              <StoreName>{item.storeName}</StoreName>
              <StoreDesc numberOfLines={2}>{item.description}</StoreDesc>
            </FlexColumn>
            <Text></Text>
            <PriceContainer>
              <Price>
                R${item.price.toFixed(2)}
                <PriceType> {item.priceType}</PriceType>
              </Price>
            </PriceContainer>
          </BottomCard>
        )}
      />
    </>
  );
}

/********************************************************/
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../routes/stack.routes.js";
import colors from "../../../../theme/colors";

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
  background-color: #fffbda;
  border-radius: 25px;
  /* border-top-right-radius: 50px; */
  margin: 0 10px;
  box-shadow: 2px -2px 5px rgba(0, 0, 0, 0.3); /* Standard CSS box-shadow */
  border: 1px solid #ddd;
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

const StoreName = styled.Text`
  /* Inter font */
  /* font-family: "Inter", sans-serif; */
  height: 50%;
  /* font-size: ${0.05 * width}px; */
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
  /* padding: 0 10px; */
  width: 40%;
  height: 90%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Price = styled.Text`
  /* width: 100%; */
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.text};
`;

const PriceType = styled.Text`
  font-size: 12px;
  /* width: 100%; */
  /* text-align: right; */
  font-weight: bold;
  color: ${colors.text};
`;
