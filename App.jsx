import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Map from "./src/components/Map/Index";
import Index from "./src/components/TestComponent/Index";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="transparent" /> */}
      <Map></Map>
      {/* <Index></Index> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#fff",
  },
});
