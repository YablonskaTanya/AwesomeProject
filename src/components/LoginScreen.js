import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import add from "../../images/add.png";
import keyboard from "../../images/keyboard.png";

export default LoginScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Увійти</Text>
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.showBtn}>
            <Text>Показати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text>Немає акаунту?</Text>
          <TouchableOpacity>
            <Text>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>{/* <Image style={styles.keyboard} source={keyboard} /> */}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    // bottom: 90,

    backgroundColor: "#fff",
    width: 375,
    height: 489,
    marginLeft: 25,
    marginRight: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    overflow: "hidden",
  },
  title: {
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
    color: "#212121",
    fontFamily: "Roboto-Black",
    fontSize: 30,
    fontWeight: 500,
  },

  input: {
    fontFamily: "Roboto-Black",
    fontSize: 16,
    width: 343,
    height: 50,
    margin: 16,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },

  btn: {
    fontFamily: "Roboto-Black",
    fontSize: 30,
  },
  button: {
    width: 343,
    height: 51,
    borderRadius: 24,
    backgroundColor: "#FF6C00",
    fontFamily: "Roboto-Black",
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
    right: 30,
  },
  keyboard: {
    flex: 2,
    position: "absolute",
    bottom: 0,
    left: 25,
    right: 25,
  },
});
