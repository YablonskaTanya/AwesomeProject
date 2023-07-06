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
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ImageBG from "../../assets/images/ImageBG.png";
import avatar from "../../assets/images/avatar.png";

import { AntDesign } from "@expo/vector-icons";

export default RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const navigation = useNavigation();

  const onRegister = () => {
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
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
                  <Text onPress={() => navigation.navigate("LoginScreen")}>
                    Увійти
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
    paddingTop: 80,
    paddingBottom: 24,
  },

  avatarContainer: {
    position: "absolute",
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    top: "-15%",
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
    marginBottom: 24,
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
