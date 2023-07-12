import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
  Platform,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
  MaterialIcons,
  SimpleLineIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import image from "../../assets/images/rectangle.png";
import sea from "../../assets/images/sea.png";
import house from "../../assets/images/house.png";
import ImageBG from "../../assets/images/ImageBG.png";
import avatar from "../../assets/images/avatar.png";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={ImageBG} style={styles.image}>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          > */}
          <View style={styles.formContainer}>
            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarLogo}>
                <Image style={styles.avatar} source={avatar} />
              </View>
              {/* <TouchableOpacity style={styles.addBtn}>
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </TouchableOpacity> */}
              <TouchableOpacity style={styles.closeBtn}>
                <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Natali Romanova</Text>
            <View style={styles.contentContainer}>
              <View>
                <Image style={styles.contentImage} source={image} />
                <Text style={styles.contentTitle}>Ліс</Text>
                <View style={styles.feedbackContainer}>
                  <View style={styles.feedbackContainerLeftEl}>
                    <View style={styles.feedbackContainerEl}>
                      <TouchableOpacity>
                        <FontAwesome
                          name="comment-o"
                          size={24}
                          color="#FF6C00"
                        />
                      </TouchableOpacity>
                      <Text>8</Text>
                    </View>
                    <View style={styles.feedbackContainerEl}>
                      <TouchableOpacity>
                        <AntDesign name="like2" size={24} color="#FF6C00" />
                      </TouchableOpacity>
                      <Text>153</Text>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.feedbackContainerEl,
                      styles.localionPosition,
                    ]}
                  >
                    <TouchableOpacity>
                      <SimpleLineIcons
                        style={styles.locationIcon}
                        name="location-pin"
                        size={24}
                        color="#BDBDBD"
                      />
                    </TouchableOpacity>
                    <Text style={styles.locationIconTitle}>Ukraine</Text>
                  </View>
                </View>
              </View>
              <View>
                <Image style={styles.contentImage} source={sea} />
                <Text style={styles.contentTitle}>Захід на Чорному морі</Text>
                <View style={styles.feedbackContainer}>
                  <View style={styles.feedbackContainerLeftEl}>
                    <View style={styles.feedbackContainerEl}>
                      <TouchableOpacity>
                        <FontAwesome
                          name="comment-o"
                          size={24}
                          color="#FF6C00"
                        />
                      </TouchableOpacity>
                      <Text>3</Text>
                    </View>
                    <View style={styles.feedbackContainerEl}>
                      <TouchableOpacity>
                        <AntDesign name="like2" size={24} color="#FF6C00" />
                      </TouchableOpacity>
                      <Text>200</Text>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.feedbackContainerEl,
                      styles.localionPosition,
                    ]}
                  >
                    <TouchableOpacity>
                      <SimpleLineIcons
                        style={styles.locationIcon}
                        name="location-pin"
                        size={24}
                        color="#BDBDBD"
                      />
                    </TouchableOpacity>
                    <Text style={styles.locationIconTitle}>Ukraine</Text>
                  </View>
                </View>
              </View>
              <View>
                <Image style={styles.contentImage} source={house} />
                <Text style={styles.contentTitle}>
                  Старий будиночок у Венеції
                </Text>
                <View style={styles.feedbackContainer}>
                  <View style={styles.feedbackContainerLeftEl}>
                    <View style={styles.feedbackContainerEl}>
                      <TouchableOpacity>
                        <FontAwesome
                          name="comment-o"
                          size={24}
                          color="#FF6C00"
                        />
                      </TouchableOpacity>
                      <Text>50</Text>
                    </View>
                    <View style={styles.feedbackContainerEl}>
                      <TouchableOpacity>
                        <AntDesign name="like2" size={24} color="#FF6C00" />
                      </TouchableOpacity>
                      <Text>200</Text>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.feedbackContainerEl,
                      styles.localionPosition,
                    ]}
                  >
                    <TouchableOpacity>
                      <SimpleLineIcons
                        style={styles.locationIcon}
                        name="location-pin"
                        size={24}
                        color="#BDBDBD"
                      />
                    </TouchableOpacity>
                    <Text style={styles.locationIconTitle}>Italy</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* </KeyboardAvoidingView> */}
        </ImageBackground>
      </ScrollView>
    </View>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  logoutBtn: {
    position: "absolute",
    top: 16,
    right: 16,
  },

  formContainer: {
    marginTop: 180,
    backgroundColor: "#fff",
    width: "100%",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 80,
    paddingBottom: 124,
  },
  avatarContainer: {
    position: "absolute",
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    top: "-6%",
    left: "35%",
  },
  contentContainer: {
    // height: 240,
    borderRadius: 8,
    alignItems: "center",
    gap: 16,
  },

  closeBtn: {
    position: "absolute",
    bottom: 10,
    right: -10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  contentTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    marginTop: 8,
  },
  feedbackContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  feedbackContainerEl: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  localionPosition: {
    justifyContent: "flex-start",
  },
  locationIconTitle: {
    textDecorationLine: "underline",
  },
  feedbackContainerLeftEl: {
    flexDirection: "row",
    gap: 16,
  },
  // linkContainer: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   marginTop: 16,
  //   gap: 5,
  // },
  // showBtn: {
  //   position: "absolute",
  //   top: 25,
  //   right: 50,
  // },
  // error: {
  //   color: "red",
  //   paddingLeft: 20,
  // },
});

export default ProfileScreen;
