import MapScreen from "./src/components/Map/Index";
import IndexScreen from "./src/components/TextScreen/Index";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

// const bottomTabOptions = {
//   tabBarShowLabel: false,
//   // tabBarBadge: "",
//   // tabBarLabelPosition: "beside-icon",
//   tabBarActiveTintColor: "red",
//   tabBarInactiveTintColor: "black",
//   tabBarActiveBackgroundColor: "pink",
//   tabBarHideOnKeyboard: true,
//   headerShown: false,
//   shifting: true,
//   // header: () => {},
// };

 type RootTabParamList = { // NOT THE ONLY IMPLEMENTATION OF THIS! (Remember to edit all versions of this variable when altering)
  Map: undefined,
  Index: undefined,
}
const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Index"
        shifting
        activeColor={"red"}
        inactiveColor={"black"}
        keyboardHidesNavigationBar
      >
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: "MapView",
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? "location-on" : "location-off"}
                color={color}
                size={26}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Index"
          component={IndexScreen}
          options={{
            tabBarLabel: "TypeTest",
            tabBarIcon: ({ color }) => (
              <Icon name="location-history" color={color} size={26} />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
