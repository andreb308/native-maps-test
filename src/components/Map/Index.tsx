import { Marker } from "react-native-maps";
import { useEffect } from "react";
import * as Location from "expo-location";

import { Container, StyledMap } from "./Style";
import { useAppContext } from "../AppContext";

import BottomScroller from "./Templates/BottomScroller";
import LoadingView from "./Templates/LoadingView";
import CityInput from "./Templates/CityInput";

import { createStackNavigator } from "@react-navigation/stack";
import CakeDetails from "../CakeDetails/Index";
import { CakeProps } from "./Types";

export type RootStackParamList = {
  MapView: undefined;
  CakeDetails: { props: CakeProps };
  // Add other screens here
};

const Stack = createStackNavigator<RootStackParamList>();

export default function MapStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MapView" component={Map} />
      <Stack.Screen
        name="CakeDetails"
        component={CakeDetails as React.ComponentType<{}>}
      />
    </Stack.Navigator>
  );
}


function Map() {
  const { data, handleFetch, mapRef, cityList, loading } = useAppContext();

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
    handleFetch();
  }, []);

  return (
    <>
      {loading && <LoadingView />}

      <StyledMap ref={mapRef}>
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
        <BottomScroller />
        <CityInput />
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
