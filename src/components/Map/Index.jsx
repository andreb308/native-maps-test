import { Marker } from "react-native-maps";
import { hardcodedCities } from "../../../hardcodedCities";
import { useRef, useEffect } from "react";
import * as Location from "expo-location";

import {
  Container,
  StyledMap,
  StyledButton,
  ButtonText,
  ButtonContainer,
} from "./Style";

export default function Map() {
  const mapRef = useRef(null);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("Current location:", location);
    // Handle the obtained location data as needed
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  const moveToCity = (city) => {
    const { latitude, longitude } = city.coordinates;
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    // setInitialRegion(region);
    mapRef.current.animateToRegion(region, 3000);
  };

  return (
    <Container>
      <StyledMap ref={mapRef}>
        {hardcodedCities.map((city) => (
          <Marker key={city.id} coordinate={city.coordinates}></Marker>
        ))}
      </StyledMap>

      <ButtonContainer>
        {hardcodedCities.map((city) => (
          <StyledButton key={city.id} onPress={() => moveToCity(city)}>
            <ButtonText>{city.name}</ButtonText>
          </StyledButton>
        ))}
      </ButtonContainer>
    </Container>
  );
}
