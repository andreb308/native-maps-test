import MapView, { Marker } from "react-native-maps";
import { hardcodedCities } from "../../../hardcodedCities";
import { useRef, useEffect, useState } from "react";
import * as Location from "expo-location";
import { ActivityIndicator } from "react-native";

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

import BottomScroller from "./Templates/BottomScroller";
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
    let data;
    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${locationSearch}&api_key=658a0272502b7149047897ubc10ad65`
      );
      data = await response?.json();
    } catch (error) {
      console.log("Error occurred while fetching geocoding data:", error);
      return;
    }

    if (!data || data.length === 0) {
      console.log("No geocoding data found.");
      return;
    }

    const cityName = data[0].display_name;
    const latitude = parseFloat(data[0].lat);
    const longitude = parseFloat(data[0].lon);

    setCityList((prevList) =>
      [
        ...prevList,
        {
          id: prevList[2]!.id + 1,
          name: cityName.split(",")[0].trim() || "Cidade",
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

    setLoading(true);
    mapRef.current?.animateToRegion(region, ANIMATION_DURATION);
    setTimeout(() => setLoading(false), ANIMATION_DURATION);
  };
  return (
    <>
      {loading && (
        <LoadingView>
          <ActivityIndicator size={"large"} animating={true} color='red' />
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
          {/* <TextInput /> */}
          <InputIcon />
        </SearchContainer>

        <BottomScroller />
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
