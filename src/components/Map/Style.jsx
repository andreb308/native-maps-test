import styled from "styled-components/native";
import MapView from "react-native-maps";
import Constants from "expo-constants";

const MapViewAttrs = {
  initialRegion: {
    latitude: 35.6895,
    longitude: 139.6917,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  },
  mapType: "satellite",
  provider: "google",
  showsUserLocation: true,
  showsMyLocationButton: true,
  mapPadding: {
    top: Constants.statusBarHeight || 0,
    right: 5,
    bottom: 5,
    left: 5,
  },
};

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const StyledMap = styled(MapView).attrs(MapViewAttrs)`
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
  margin-top: 10px;
  border-radius: 80px;
  overflow: hidden;
  background-color: darkgreen;
  align-items: center;
  color: white;
`;

export const ButtonText = styled.Text`
  color: white;
`;

export const ButtonContainer = styled.View`
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
`;
