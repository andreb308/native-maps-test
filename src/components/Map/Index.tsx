import MapView, { Marker } from "react-native-maps";
import { hardcodedCities } from "../../../hardcodedCities";
import { useRef, useEffect, useState } from "react";
import * as Location from "expo-location";
import {
  TextInput,
  ActivityIndicator,
} from "react-native";

import {
  Container,
  StyledMap,
  StyledInput,
  InputIcon,
  SearchContainer,
  // StyledButton,
  // ButtonText,
  // ButtonContainer,
  LoadingView,
} from "./Style";

import { GeocodeInfo } from "./Types";
// import { Text } from "react-native-paper";

const ANIMATION_DURATION = 1000;

export default function Map() {
  const mapRef = useRef<MapView | null>(null);
  const [locationSearch, setLocationSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [cityList, setCityList] = useState(hardcodedCities);

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

  const handleLocationSearch = async () => {
    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${locationSearch}`
      );
      const data: GeocodeInfo = await response?.json();

      if (data && data.length > 0) {
        const cityName = data[0]!.display_name;
        const latitude = parseFloat(data[0]!.lat);
        const longitude = parseFloat(data[0]!.lon);

        setCityList((prevList) =>
          [
            ...prevList,
            {
              id: prevList[2]!.id + 1,
              name: cityName?.split(",")[0]!.trim() || "Cidade",
              coordinates: {
                latitude,
                longitude,
              },
            },
          ].slice(-3)
        );

        const region = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };

        // Enables Loading Animation while the map is moving
        setLoading(true);
        mapRef.current?.animateToRegion(region, ANIMATION_DURATION);
        setTimeout(() => setLoading(false), ANIMATION_DURATION);
      } else {
        console.log("No geocoding data found.");
      }
    } catch (error) {
      console.log("Error occurred while fetching geocoding data:", error);
    }
  };
  return (
    <>
      {loading && (
        <LoadingView>
          <ActivityIndicator size={"large"} animating={true} color="red" />
        </LoadingView>
      )}

      <StyledMap ref={mapRef}>
        {cityList.map((city) => (
          <Marker key={city.id} coordinate={city.coordinates}></Marker>
        ))}
      </StyledMap>

      <Container>
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

{
  /* <ButtonContainer>
  {cityList.map((city) => (
    <StyledButton
    key={city.id}
    onPress={() => {
      moveToCity(city);
    }}
    >
    <ButtonText key={city.id}>{city.name}</ButtonText>
    </StyledButton>
    ))}
  </ButtonContainer> */
}
// const moveToCity = (city) => {
//   const { latitude, longitude } = city.coordinates;
//   const region = {
//     latitude,
//     longitude,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };
//   // setInitialRegion(region);
//   setLoading(true);
//   mapRef.current?.animateToRegion(region, 2000);
//   setTimeout(() => setLoading(false), 2000);
// };
