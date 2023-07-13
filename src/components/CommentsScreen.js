import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import sea from "../../assets/images/sea.png";
import ellips1 from "../../assets/images/ellipse1.png";
import ellips2 from "../../assets/images/ellipse2.png";
import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={sea} />
            </View>
            <View style={styles.commentsContainer}>
              <View
                style={[styles.commentContainer, styles.commentContainerRevers]}
              >
                <View
                  style={[styles.textContainer, styles.textContainerRevers]}
                >
                  <Text style={styles.text}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                  </Text>
                  <Text style={styles.textData}>09 червня, 2020 | 08:40</Text>
                </View>

                <Image style={styles.Image} source={ellips2} />
              </View>
              <View style={styles.commentContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    A fast 50mm like f1.8 would help with the bokeh. I’ve been
                    using primes as they tend to get a bit sharper images.
                  </Text>
                  <Text style={styles.textData}>09 червня, 2020 | 09:14</Text>
                </View>
                <Image style={styles.Image} source={ellips1} />
              </View>
              <View
                style={[styles.commentContainer, styles.commentContainerRevers]}
              >
                <View
                  style={[styles.textContainer, styles.textContainerRevers]}
                >
                  <Text style={styles.text}>
                    Thank you! That was very helpful!
                  </Text>
                  <Text style={styles.textData}>09 червня, 2020 | 09:20</Text>
                </View>
                <Image style={styles.Image} source={ellips2} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.inputPad]}
            placeholder="Коментувати..."

            // onFocus={() => setIsShowKeyboard(true)}
          />

          <TouchableOpacity style={styles.arrowContainer}>
            <AntDesign name="arrowup" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: "space-around",
  },
  scrollView: {
    backgroundColor: "#fff",
  },
  mainContainer: {
    alignItems: "center",

    gap: 32,
  },
  textContainer: {
    width: "85%",
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    gap: 8,
  },
  textContainerRevers: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 0,
  },
  commentsContainer: {
    gap: 32,
    width: "80%",
  },
  commentContainer: {
    flexDirection: "row",
    gap: 16,
  },
  commentContainerRevers: {
    flexDirection: "row-reverse",
  },
  text: {
    fontSize: 13,
  },
  textData: {
    fontSize: 10,
    color: "#BDBDBD",
  },
  input: {
    width: "90%",
    paddingStart: 16,
    height: 50,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "#F6F6F6",
  },
  inputContainer: {
    alignItems: "center",
    // justifyContent: "flex-start",
  },
  arrowContainer: {
    position: "absolute",
    top: "14%",
    right: "7%",
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CommentsScreen;
