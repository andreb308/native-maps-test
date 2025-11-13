import React, { useRef } from "react";
import { Platform } from "react-native";
import MapView, { MapMarker, Marker, PROVIDER_GOOGLE } from "react-native-maps";

type StaticMapProps = {
  latitude: number;
  longitude: number;
  storeName: string;
};

const StaticMapTemp = ({ latitude, longitude, storeName }: StaticMapProps) => {

  const markerRef = useRef<MapMarker>(null)
  const onRegionChangeComplete = () => {
    if (markerRef && markerRef.current && markerRef.current.showCallout) {
      markerRef.current.showCallout();
    }
  };
  return (
    <MapContainer>
      <StaticMap
        zoomEnabled={false}
        scrollEnabled={false}
        zoomControlEnabled={false}
        rotateEnabled={false}
        toolbarEnabled
        provider={PROVIDER_GOOGLE}
        onMapLoaded={() => onRegionChangeComplete()}
        initialCamera={{
          center: {latitude, longitude},
          pitch: 30,
          heading: 20,
          zoom: 18,
        }}
      >
        <Marker ref={markerRef} coordinate={{ latitude, longitude }} title={storeName}></Marker>
      </StaticMap>
    </MapContainer>
  );
};

export default StaticMapTemp;

////////////////////////////////////////////////////////////////////////////

import styled from "@emotion/native";
import colors from "../../../../theme/colors";

const MapContainer = styled.View`
  width: 100%;
  max-width: 650px;
  height: 30%;
  /* margin-top: 20px; */
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${colors.background};
`;

const StaticMap = styled(MapView)`
  width: 100%;
  height: 100%;
`;
