import React from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import image from "../../assets/images/rectangle.png";
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.addPhotoContainer}>
            <View style={styles.addPhotoIcon}>
              <TouchableOpacity>
                <MaterialIcons
                  name="photo-camera"
                  size={24}
                  color="rgba(255, 255, 255, 1)"
                />
              </TouchableOpacity>
            </View>
            <Image style={styles.tinyLogo} source={image} />
          </View>
          <Text style={styles.addPhotoText}>Редагувати фото</Text>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Назва..." />
            <View style={styles.locationContainre}>
              <SimpleLineIcons
                style={styles.locationIcon}
                name="location-pin"
                size={24}
                color="#BDBDBD"
              />
              <TextInput
                style={[styles.input, styles.inputPad]}
                placeholder="Місцевість..."
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Опубліковати</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  formContainer: {
    width: "100%",
    alignItems: "flex-start",
  },

  addPhotoContainer: {
    backgroundColor: "#E8E8E8",
    width: 343,
    height: 240,
    borderRadius: 8,
    marginLeft: "auto",
    marginRight: "auto",
  },
  addPhotoIcon: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "40%",
    left: "40%",
    zIndex: 999,
  },
  addPhotoText: {
    color: "#BDBDBD",
    marginTop: 8,
    alignItems: "flex-start",
  },
  inputContainer: {
    marginTop: 24,
    width: "100%",
  },
  tinyLogo: {
    resizeMode: "cover",
    width: 343,
    height: 240,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: "100%",
    height: 50,

    borderBottomWidth: 1,
    padding: 10,
    borderColor: "#E8E8E8",
    backgroundColor: "#FFF",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputPad: {
    paddingLeft: 32,
  },
  locationIcon: {
    top: 35,
    left: 0,
    zIndex: 1999,
  },
  button: {
    width: "100%",
    height: 51,
    borderRadius: 24,
    backgroundColor: "#FF6C00",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 32,
    padding: 15,
  },
  buttonText: {
    color: "#fff",
  },
});

export default ProfileScreen;
