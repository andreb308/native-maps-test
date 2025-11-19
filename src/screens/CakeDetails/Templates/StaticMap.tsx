import React, { useRef } from "react";
import { Platform } from "react-native";
import MapView, { MapMarker, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MapContainer, StyledMapView } from "../Style";

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
      <StyledMapView
        zoomEnabled={false}
        scrollEnabled={false}
        zoomControlEnabled={false}
        rotateEnabled={false}
        toolbarEnabled
        provider={PROVIDER_GOOGLE}
        onMapLoaded={() => onRegionChangeComplete()}
        initialCamera={{
          center: { latitude, longitude },
          pitch: 30,
          heading: 20,
          zoom: 18,
        }}
      >
        <Marker ref={markerRef} coordinate={{ latitude, longitude }} title={storeName}></Marker>
      </StyledMapView>
    </MapContainer>
  );
};

export default StaticMapTemp;
