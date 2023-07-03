import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import PostScreen from "./src/components/PostsScreen";
import RegistrationScreen from "./src/components/RegistrationScreen";
import LoginScreen from "./src/components/LoginScreen";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <PostScreen />
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
