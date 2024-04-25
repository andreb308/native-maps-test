import styled from "styled-components/native";
import MapView from "react-native-maps";
import Constants from "expo-constants";

export const pointerEventsAttrs: Object = {
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
