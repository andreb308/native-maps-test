import MapStack from "./stack.routes";
import IndexScreen from "../src/screens/TextScreen/Index";
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

type RootTabParamList = {
  // NOT THE ONLY IMPLEMENTATION OF THIS! (Remember to edit all versions of this variable when altering)
  Map: undefined;
  Index: undefined;
};

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      barStyle={
        {
          // height: 30,
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // margin: 0,
          // padding: 0, // Set your desired height here
          // Other styling properties can be added here
        }
      }
      initialRouteName="Map"
      shifting
      activeColor={"red"}
      inactiveColor={"black"}
      keyboardHidesNavigationBar
    >
      <Tab.Screen
        name="Map"
        component={MapStack}
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
  );
}
