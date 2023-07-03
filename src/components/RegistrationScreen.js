import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import avatar from "../../assets/images/avatar.png";
import keyboard from "../../assets/images/keyboard.png";
import { AntDesign } from "@expo/vector-icons";

export default RegistrationScreen = () => {
  return (
    <>
      <View style={styles.container}>
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
        <TextInput style={styles.input} placeholder="Логін" />
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
          <Text style={styles.buttonText}>Зареєстуватися</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text>Вже є акаунт?</Text>
          <TouchableOpacity>
            <Text>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>{/* <Image style={styles.keyboard} source={keyboard} /> */}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    // bottom: 150,
    backgroundColor: "#fff",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  avatarContainer: {
    position: "absolute",
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    // zIndex: 999,
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
    marginTop: 100,
    marginBottom: 32,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
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
    marginBottom: 50,
    gap: 5,
  },
  showBtn: {
    position: "absolute",
    top: 33,
    right: 60,
  },
  keyboard: {
    flex: 2,
    position: "absolute",
    bottom: 0,
    left: 25,
    right: 25,
  },
});
