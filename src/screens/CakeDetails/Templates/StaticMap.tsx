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
import colors from "../../../../theme/colors";

const MapContainer = styled.View`
  width: 100%;
  max-width: 650px;
  height: 30%;
  /* margin-top: 20px; */
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${colors.activeIndicatorBackground};
`;
const StaticMap = styled(MapView).attrs({
  zoomEnabled: false,
  scrollEnabled: false,
})`
  width: 100%;
  height: 100%;
`;
