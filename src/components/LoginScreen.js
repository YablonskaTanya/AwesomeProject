import React, { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImageBG from "../../assets/images/ImageBG.png";

export default LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const navigation = useNavigation();

  const onLogin = () => {
    console.log(`email: ${email}, password: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={ImageBG} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formContainer,
                // paddingBottom: isShowKeyboard ? 50 : 0,
              }}
            >
              <Text style={styles.title}>Увійти</Text>

              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Адреса електронної пошти"
              />
              <View>
                <TextInput
                  style={[styles.input, styles.inputPad]}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  placeholder="Пароль"
                />
                <TouchableOpacity style={styles.showBtn}>
                  <Text>Показати</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
              <View style={styles.linkContainer}>
                <Text>Немає акаунту?</Text>
                <TouchableOpacity>
                  <Text
                    onPress={() => navigation.navigate("RegistrationScreen")}
                  >
                    Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 32,
    paddingBottom: 32,
  },

  title: {
    textAlign: "center",
    marginBottom: 32,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },

  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: "90%",
    height: 50,
    margin: 16,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputPad: {
    paddingRight: 120,
  },

  button: {
    width: "90%",
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
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    gap: 5,
  },
  showBtn: {
    position: "absolute",
    top: 33,
    right: 60,
  },
});
