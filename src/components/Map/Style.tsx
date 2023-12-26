import styled from "styled-components/native";
import MapView from "react-native-maps";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Animated, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const pointerEventsAttrs: Object = {
  pointerEvents: "box-none",
};

const MapViewAttrs: Object = {
  initialRegion: {
    latitude: -22.2827158,
    longitude: -42.5314,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
  },
  mapType: "standard",
  provider: "google",
  showsUserLocation: true,
  showsMyLocationButton: false,
  showsScale: true,
  mapPadding: {
    top: Constants.statusBarHeight,
    right: 5,
    bottom: 5,
    left: 5,
  },
};

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
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 10px;
  /* border-top-right-radius: 50px; */
  margin: 0 10px; /* Margin shorthand for horizontal margin */
  box-shadow: 2px -2px 5px rgba(0, 0, 0, 0.3); /* Standard CSS box-shadow */
  border: 1px solid #ddd;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  overflow: hidden;
`;

export const LoadingView = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #00000033;
`;

export const Container = styled.View.attrs(pointerEventsAttrs)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* z-index: 1; */
  align-items: center;
  justify-content: flex-start;
`;

export const StyledMap = styled(MapView).attrs(MapViewAttrs)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

export const StyledInput = styled.TextInput.attrs({
  placeholder: "Digite um local",
  cursorColor: "grey",
  returnKeyType: "search",
})`
  background-color: #fff;
  width: 100%;
  height: 60px;
  border-radius: 100px;
  position: relative;
  padding-left: 50px;
  border: 2px solid #eaeaea;
`;

export const InputIcon = styled(Icon).attrs({
  name: "location-on",
  size: 30,
  color: "#5f5f5f",
})`
  position: absolute;
  left: 15px;
`;

export const SearchContainer = styled.View.attrs(pointerEventsAttrs)`
  position: relative;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 60px;
  margin-top: 48px;
`;
export const newLoadingView = styled(LoadingView)`
  background-color: blue;
`;
//   align-items: center;
//   color: white;
// `;

// export const ButtonText = styled.Text`
//   color: white;
// `;

// export const ButtonContainer = styled.View.attrs(pointerEventsAttrs)`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   height: 20%;
//   z-index: 1;
//   margin: 10%;
//   /* background-color: */
// `;

// export const StyledButton = styled.TouchableOpacity`
//   width: 50%;
//   height: 40px;
//   justify-content: center;
//   /* margin-top: 10px; */
//   border-radius: 80px;
//   overflow: hidden;
