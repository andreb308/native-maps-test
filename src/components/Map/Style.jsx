import styled from "styled-components/native";
import MapView from "react-native-maps";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/MaterialIcons";

const MapViewAttrs = {
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
`;

pointerEventsAttrs = {
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

export const StyledButton = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  justify-content: center;
  /* margin-top: 10px; */
  border-radius: 80px;
  overflow: hidden;
  background-color: darkgreen;
  align-items: center;
  color: white;
`;

export const ButtonText = styled.Text`
  color: white;
`;

export const ButtonContainer = styled.View.attrs(pointerEventsAttrs)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  z-index: 1;
  margin: 10%;
  /* background-color: */
`;

export const StyledInput = styled.TextInput.attrs({
  placeholder: "Digite um local",
  cursorColor: "grey",
  inlineImageLeft: "location-pin-svgrepo-com",
  returnKeyType: "search",
})`
  background-color: white;
  width: 80%;
  height: 60px;
  border-radius: 100px;
  position: relative;
  padding-left: 60px;
`;

export const InputIcon = styled(Icon).attrs({
  name: "location-on",
  size: 30,
  color: "#5f5f5f",
})`
  position: absolute;
  left: 15%;
  bottom: 50%;
`;

export const SearchContainer = styled.View.attrs(pointerEventsAttrs)`
  /* position: absolute; */
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin-top: 10%;
  /* bottom: 10%; */
`;
