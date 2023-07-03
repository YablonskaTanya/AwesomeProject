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
import add from "../../assets/images/add.png";
import keyboard from "../../assets/images/keyboard.png";
import union from "../../assets/images/union.png";

export default RegistrationScreen = () => {
  return (
    <>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarLogo}>
          {/* <Image style={styles.tinyLogo} source={avatar} /> */}
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Image style={styles.addImg} source={add} />
        </TouchableOpacity>
        <View style={styles.unionBtnContainer}>
          <TouchableOpacity style={styles.unionBtn}>
            {/* <Image style={styles.unionImg} source={union} /> */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
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
    width: 375,
    height: 549,
    marginLeft: 25,
    marginRight: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    overflow: "hidden",
  },
  avatarLogo: {
    position: "absolute",
    top: 320,
    left: 150,
    // top: 170,

    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,

    borderRadius: 16,
  },
  avatarContainer: {
    position: "absolute",
    zIndex: 999,
  },
  addBtn: {
    position: "absolute",
    top: 400,
    left: 255,
  },
  unionBtn: {
    position: "absolute",
    top: "30%",
    left: "30%",
  },
  // unionBtnContainer: {
  //   position: "absolute",
  //   top: 400,
  //   top: 250,
  //   left: 255,
  //   width: 25,
  //   height: 25,
  //   borderRadius: "50%",
  //   border: 2,
  //   borderColor: "#E8E8E8",
  //   backgroundColor: "#FFFFFF",
  // },
  title: {
    textAlign: "center",
    marginTop: 100,
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
