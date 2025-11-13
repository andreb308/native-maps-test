import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import CakeDetails from "../src/screens/CakeDetails/Index";
import { CakeProps } from "../src/screens/Map/Types";
import Map from "../src/screens/Map/Index";

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
