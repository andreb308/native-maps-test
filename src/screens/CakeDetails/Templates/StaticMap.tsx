import React from "react";
import { Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";

type StaticMapProps = {
  latitude: number;
  longitude: number;
  storeName: string;
};

const StaticMapTemp = ({ latitude, longitude, storeName }: StaticMapProps) => {
  return (
    <MapContainer>
      <StaticMap
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title={storeName}></Marker>
      </StaticMap>
    </MapContainer>
  );
};

export default StaticMapTemp;

////////////////////////////////////////////////////////////////////////////

import styled from "styled-components/native";

const MapContainer = styled.View`
  width: 90%;
  height: 30%;
  /* margin-top: 20px; */
  border-radius: 25px;
  overflow: hidden;
  // Figma drop shadow
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  ${Platform.OS === "android" && "elevation: 5;"}
`;
const StaticMap = styled(MapView).attrs({
  zoomEnabled: false,
  scrollEnabled: false,
})`
  width: 100%;
  height: 100%;
`;
