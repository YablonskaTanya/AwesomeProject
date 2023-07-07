import { useNavigation } from "@react-navigation/native";
import CreatePostsScreen from "./CreatePostsScreen";
import {
  Button,
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// import ImageBG from "../../assets/images/ImageBG.png";
import avatar from "../../assets/images/avatar.png";

export default PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.personContainer}>
        <Image style={styles.tinyLogo} source={avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>Natali Romanova</Text>
          <Text style={styles.textEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  personContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textContainer: {},
  textName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  textEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
});
