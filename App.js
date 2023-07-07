import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import PostScreen from "./src/components/PostsScreen";
import RegistrationScreen from "./src/components/RegistrationScreen";
import LoginScreen from "./src/components/LoginScreen";
import CommentsScreen from "./src/components/CommentsScreen";
import CreatePostsScreen from "./src/components/CreatePostsScreen";
import Home from "./src/components/Home";
import ProfileScreen from "./src/components/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Button,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

// SplashScreen.preventAutoHideAsync();
import ImageBG from "./assets/images/ImageBG.png";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="LoginScreen">
          <MainStack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }}
          />

          <MainStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}

{
  /* <RegistrationScreen />
      <LoginScreen /> */
}
