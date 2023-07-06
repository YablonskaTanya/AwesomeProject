import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./LoginScreen";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarStyle: {
          paddingTop: 16,
          paddingBottom: 16,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
            // onPress={() => navigation.navigate("PostsScreen")}
            >
              <AntDesign name="appstore-o" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
            // onPress={() => navigation.navigate("PostsScreen")}
            >
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
            // onPress={() => navigation.navigate("LoginScreen")}
            >
              <Feather name="user" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
