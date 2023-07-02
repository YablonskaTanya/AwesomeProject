import { ImageBackground, StyleSheet, View } from "react-native";
import ImageBG from "../../images/ImageBG.png";

export default PostScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImageBG}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,

    justifyContent: "center",
  },
});
