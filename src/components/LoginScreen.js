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

export default LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log(`${email} + ${password}`);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Увійти</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Адреса електронної пошти"
            />
            <View>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Пароль"
              />
              <TouchableOpacity style={styles.showBtn}>
                <Text>Показати</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            <Text>Немає акаунту?</Text>
            <TouchableOpacity>
              <Text>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,

    justifyContent: "flex-end",
    backgroundColor: "lightblue",

    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  title: {
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },

  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: 343,
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

  button: {
    width: 343,
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
    marginBottom: 64,
    gap: 5,
  },
  showBtn: {
    position: "absolute",
    top: 33,
    right: 60,
  },
});
