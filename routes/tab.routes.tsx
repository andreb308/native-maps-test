import React from "react";
import MapStack from "./stack.routes";
import IndexScreen from "../src/screens/TextScreen/Index";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

type RootTabParamList = {
  // NOT THE ONLY IMPLEMENTATION OF THIS! (Remember to edit all versions of this variable when altering)
  Map: undefined;
  Index: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabRoutes() {
  return (
    <Provider>
      <Tab.Navigator
        
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
          
            shifting={true}
            navigationState={state}
            safeAreaInsets={insets}
            compact
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) =>
              descriptors[route.key].options.tabBarIcon?.({
                focused,
                color,
                size: 24,
              }) || null
            }
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                typeof options.tabBarLabel === "string"
                  ? options.tabBarLabel
                  : typeof options.title === "string"
                  ? options.title
                  : route.name;

              return label;
            }}
            activeColor="darkred"
            inactiveColor="black"
            // onTabLongPress={({ route }) => {
            //   // refresh on long press
            //   navigation.dispatch({
            //     ...CommonActions.navigate(route.name, route.params),
            //   });
            // }}
            keyboardHidesNavigationBar={false}
          />
        )}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Map"
          component={MapStack}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "location-sharp" : "location-outline"}
                size={26}
                color={focused ? color : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Index"
          component={IndexScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "musical-notes-sharp" : "musical-notes-outline"}
                size={26}
                color={focused ? color : "gray"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Provider>
  );
}
