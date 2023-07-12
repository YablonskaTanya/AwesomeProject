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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.formContainer,
              marginBottom: isShowKeyboard ? 50 : 50,
            }}
          >
            <View style={styles.addPhotoContainer}>
              <View style={styles.addPhotoIcon}>
                <TouchableOpacity>
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.addPhotoText}>Завантажте фото</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Назва..."
                onFocus={() => setIsShowKeyboard(true)}
              />
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
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Опубліковати</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  formContainer: {
    width: "100%",
    // alignItems: "flex-start",
    alignItems: "center",
    // alignItems: "baseline",
  },

  addPhotoContainer: {
    backgroundColor: "#E8E8E8",
    width: "90%",
    height: 240,
    borderRadius: 8,
  },
  addPhotoIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "40%",
    left: "40%",
  },
  addPhotoText: {
    color: "#BDBDBD",
    marginTop: 8,
    alignItems: "flex-start",
    marginRight: " 50%",
  },
  inputContainer: {
    marginTop: 24,
    width: "90%",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: "90%",
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
    width: "90%",
    height: 51,
    borderRadius: 24,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 32,
    padding: 15,
  },
  buttonText: {
    color: "#BDBDBD",
  },
});

export default CreatePostsScreen;
