import styled from "@emotion/native";
import MapView, { MapViewProps } from "react-native-maps";
import Constants from "expo-constants";

// export const pointerEventsAttrs: Object = {
// };

// const MapViewAttrs: MapViewProps = {
//   ,
// };

export const Container = styled.View(`
  width: 100%;
  height: 100%;
  /* position: abs */
  flex: 1;
  /* z-index: 1; */
  align-items: center;
  justify-content: space-between;
`);

export const StyledMap = styled(MapView)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
