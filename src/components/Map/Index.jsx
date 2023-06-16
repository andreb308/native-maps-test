import MapView, { Marker } from "react-native-maps";
import { hardcodedCities } from "../../../hardcodedCities";
import { useRef, useEffect, useState } from "react";
import * as Location from "expo-location";
import { TextInput } from "react-native";

import {
  Container,
  StyledMap,
  StyledInput,
  InputIcon,
  SearchContainer,
} from "./Style";

export default function Map() {
  const mapRef = useRef({});
  const [locationSearch, setLocationSearch] = useState("");
  const [reg, setReg] = useState({
    latitude: 35.6895,
    longitude: 139.6917,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

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

  const moveToCity = (latitude, longitude) => {
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    console.log(latitude);
    console.log(longitude);
    console.log(region);
    // setInitialRegion(region);
  };

  useEffect(() => {
    let { latitude, latitudeDelta, longitude, longitudeDelta } = reg;
    mapRef.current.animateToRegion(
      { latitude, longitude, latitudeDelta, longitudeDelta },
      300
    );
    console.log("Effect");
    console.log(reg);
  }, [reg]);

  const handleLocationSearch = async () => {
    try {
      console.log("trying");
      const response = await fetch(
        "https://geocode.maps.co/search?q=calif%C3%B3rnia"
      );
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          const latitude = data[0].lat;
          const longitude = data[0].lon;
          const region = {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          };
          console.log("Region updated");
          console.log(region);
          setReg(region);
        } else {
          console.log("No geocoding data found.");
        }
      } else {
        console.log("Geocoding API request failed.");
      }
    } catch (error) {
      console.log("Error occurred while fetching geocoding data:", error);
    }
  };

  return (
    <>
      <Container>
        <StyledMap ref={mapRef} style={{ width: "100%", height: "100%" }}>
          {hardcodedCities.map((city) => (
            <Marker key={city.id} coordinate={city.coordinates}></Marker>
          ))}
        </StyledMap>

        <SearchContainer>
          <StyledInput
            value={locationSearch}
            onChangeText={(e) => setLocationSearch(e)}
            onSubmitEditing={() => handleLocationSearch()}
          />
          <TextInput />
          <InputIcon />
        </SearchContainer>
      </Container>
    </>
  );
}
