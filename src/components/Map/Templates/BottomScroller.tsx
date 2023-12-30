import Icon from "react-native-vector-icons/MaterialIcons";
import { Animated, Dimensions, Platform, Text } from "react-native";

import { useAppContext } from "../../AppContext";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
let mapAnimation = new Animated.Value(0);

export default function BottomScroller() {
  const { data, handleFetch, mapRef } = useAppContext()

    type Coords = {
      latitude: number,
      longitude: number
    }
  const handleMapMove = (obj: Coords) => {
    mapRef.current?.animateToRegion({...obj, latitudeDelta: 0.002, longitudeDelta: 0.002}, 3000)

  }
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
          <BottomCard key={cake.storeID} onPress={() => handleMapMove({latitude: cake.latitude, longitude: cake.longitude})}>
            <Icon name='cake' size={50} color='#5f5f5f' style={{textAlign: 'center'}}></Icon>

            <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>{cake.storeName}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{cake.city}</Text>
            
            <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 8 }}>Sabor: {cake.flavorName}</Text>
            <Text style={{ fontSize: 12, textAlign: 'justify'}}>{cake.description}</Text>
            <Text style={{ position: 'absolute', bottom: 5, right: '5%', fontWeight: '800', fontSize: 20, textAlign: 'center', color: cake.price > 10 ? 'red' : 'green' }}>R${cake.price.toFixed(2)}</Text>
          </BottomCard>
        ))}
    </Scroller>
  );
}

/********************************************************/
import styled from 'styled-components/native';

export const Scroller = styled(Animated.ScrollView).attrs({
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

export const BottomCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  /* align-items: center;
  justify-content: center; */
  background-color: #fafafa;
  border-radius: 10px;
  /* border-top-right-radius: 50px; */
  margin: 0 10px; /* Margin shorthand for horizontal margin */
  box-shadow: 2px -2px 5px rgba(0, 0, 0, 0.3); /* Standard CSS box-shadow */
  border: 1px solid #ddd;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  padding: 10px 30px;
  overflow: hidden;
`;