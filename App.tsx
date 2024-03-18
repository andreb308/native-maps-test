import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AppContextProvider } from "./src/screens/AppContext";
import TabRoutes from "./routes/tab.routes";

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </AppContextProvider>
  );
}
