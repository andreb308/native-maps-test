import MapStack from "./stack.routes";
import IndexScreen from "../src/screens/TextScreen/Index";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from "../theme/colors";

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
      barStyle={{
        backgroundColor: "white",
        // bottom: 300,
        // height: 30,
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // margin: 0,
        // padding: 0, // Set your desired height here
        // Other styling properties can be added here
      }}
      initialRouteName="Map"
      shifting
      activeIndicatorStyle={{backgroundColor: colors.activeIndicatorBackground}}
      activeColor={colors.text}
      // inactiveColor={colors.text}
      keyboardHidesNavigationBar
    >
      <Tab.Screen
        name="Map"
        component={MapStack}
        options={{
          tabBarLabel: "Bolos",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'location-sharp' : 'location-outline'} size={26} color={focused ? color : 'gray'} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Index"
        component={IndexScreen}
        options={{
          tabBarLabel: "Letra",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'musical-notes-sharp' : 'musical-notes-outline'} size={26} color={focused ? color : 'gray'} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
