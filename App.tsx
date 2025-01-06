import "react-native-gesture-handler";
import { useEffect } from "react";
import { AppContextProvider } from "./src/screens/AppContext";

import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./routes/tab.routes";

import { Inter_900Black, Inter_700Bold, Inter_400Regular,Inter_500Medium, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    Inter_900Black, Inter_700Bold, Inter_400Regular, Inter_500Medium, Inter_600SemiBold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AppContextProvider>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </AppContextProvider>
  );
}
