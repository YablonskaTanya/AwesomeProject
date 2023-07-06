import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import avatar from "../../assets/images/avatar.png";

import { AntDesign } from "@expo/vector-icons";

export default RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const onRegister = () => {
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View
        style={{
          ...styles.formContainer,

          // paddingBottom: isShowKeyboard ? 0 : 50,
        }}
      >
        <View style={styles.avatarContainer}>
          <View style={styles.avatarLogo}>
            {/* <Image style={styles.tinyLogo} source={avatar} /> */}
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.closeBtn}>
            <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
          </TouchableOpacity> */}
        </View>

        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
          style={styles.input}
          value={login}
          onChangeText={setLogin}
          placeholder="Логін"
          onFocus={() => setIsShowKeyboard(true)}
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Адреса електронної пошти"
          onFocus={() => setIsShowKeyboard(true)}
        />
        <View>
          <TextInput
            style={[styles.input, styles.inputPad]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Пароль"
            onFocus={() => setIsShowKeyboard(true)}
          />

          <TouchableOpacity style={styles.showBtn}>
            <Text>Показати</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>Зареєстуватися</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text>Вже є акаунт?</Text>
          <TouchableOpacity>
            <Text>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 100,
    paddingBottom: 32,
  },

  avatarContainer: {
    position: "absolute",
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    top: "-10%",
    left: "35%",
  },
  addBtn: {
    position: "absolute",
    bottom: "10%",
    right: "-10%",
  },
  closeBtn: {
    position: "absolute",
    bottom: 10,
    right: -10,
    backgroundColor: "#fff",
    borderRadius: "50%",
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
    width: 343,
    height: 50,
    margin: 8,
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
    gap: 5,
  },
  showBtn: {
    position: "absolute",
    top: 25,
    right: 50,
  },
});
