import { Marker } from "react-native-maps";
import { useEffect } from "react";
import * as Location from "expo-location";

import { Container, StyledMap } from "./Style";
import { useAppContext } from "../AppContext";

import BottomScroller from "./Templates/BottomScroller";
import LoadingView from "./Templates/LoadingView";
import CityInput from "./Templates/CityInput";
import { Keyboard } from "react-native";

export default function Map() {
  const { data, handleFetch, mapRef, cityList, loading } = useAppContext();

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log("Current location:", location);
  };

  useEffect(() => {
    getLocationAsync();
    handleFetch();
  }, []);

  return (
    <>
      {loading && <LoadingView />}

      <StyledMap ref={mapRef} onPress={() => Keyboard.dismiss()}>
        {cityList.map((city) => (
          <Marker key={city.id} coordinate={city.coordinates}></Marker>
        ))}

        {data!.map((cake) => (
          <Marker
            key={cake.storeID}
            coordinate={{ latitude: cake.latitude, longitude: cake.longitude }}
          ></Marker>
        ))}
      </StyledMap>

      <Container>
        <CityInput />
        <BottomScroller />
      </Container>
    </>
  );
}
