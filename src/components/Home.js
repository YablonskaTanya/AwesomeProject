import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./LoginScreen";
// import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarStyle: {
          height: 83,
          paddingTop: 16,
        },

        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <AntDesign name="appstore-o" size={24} color="#212121CC" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate("CreatePostsScreen")}
            >
              <AntDesign name="plus" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {},
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileScreen")}
            >
              <Feather name="user" size={24} color="#212121CC" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
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
    justifyContent: "space-between",
  },
  addBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  logoutBtn: {
    marginRight: 10,
  },
  backBtn: {
    marginLeft: 10,
  },
  title: {
    textAlign: "center",
  },
});

export default Home;
