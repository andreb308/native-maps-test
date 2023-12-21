import styled from "styled-components/native";
import MapView from "react-native-maps";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Animated, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export const Scroller = styled(Animated.ScrollView).attrs({
  horizontal: true,
  scrollEventThrottle: 1,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
  snapToInterval: CARD_WIDTH + 20,
})`
  position: absolute;
  background-color: pink;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding-top: 10px;
`;
/*

elevation: 2,


*/
export const BottomCard = styled.View`
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 10px; /* Margin shorthand for horizontal margin */
  box-shadow: 2px -2px 5px rgba(0, 0, 0, 0.3); /* Standard CSS box-shadow */
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  overflow: hidden;
`;

const MapViewAttrs: Object = {
  initialRegion: {
    latitude: 35.6895,
    longitude: 139.6917,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  },
  mapType: "standard",
  provider: "google",
  showsUserLocation: true,
  showsMyLocationButton: true,
  showsScale: true,
  mapPadding: {
    top: Constants.statusBarHeight,
    right: 5,
    bottom: 5,
    left: 5,
  },
};

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
  background-color: pink;
`;

const pointerEventsAttrs: Object = {
  pointerEvents: "box-none",
};

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
  justify-content: flex-end;
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

// export const StyledButton = styled.TouchableOpacity`
//   width: 50%;
//   height: 40px;
//   justify-content: center;
//   /* margin-top: 10px; */
//   border-radius: 80px;
//   overflow: hidden;

export const StyledInput = styled.TextInput.attrs({
  placeholder: "Digite um local",
  cursorColor: "grey",
  returnKeyType: "search",
})`
  background-color: white;
  width: 80%;
  height: 60px;
  border-radius: 100px;
  position: relative;
  padding-left: 50px;
`;

export const InputIcon = styled(Icon).attrs({
  name: "location-on",
  size: 30,
  color: "#5f5f5f",
})`
  position: absolute;
  left: 50px;
  bottom: 50%;
`;

export const SearchContainer = styled.View.attrs(pointerEventsAttrs)`
  position: relative;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin-bottom: 5%;
  /* bottom: 10%; */
`;
//   background-color: darkgreen;
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

export const newLoadingView = styled(LoadingView)`
    background-color: blue;

`;