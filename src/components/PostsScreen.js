import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

import image from "../../assets/images/rectangle.png";
import sea from "../../assets/images/sea.png";
import house from "../../assets/images/house.png";
import avatar from "../../assets/images/avatar.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.personContainer}>
          <Image style={styles.tinyLogo} source={avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.textName}>Natali Romanova</Text>
            <Text style={styles.textEmail}>email@example.com</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View>
            <Image style={styles.contentImage} source={image} />
            <Text style={styles.contentTitle}>Ліс</Text>
            <View style={styles.feedbackContainer}>
              <View style={styles.feedbackContainerLeftEl}>
                <View style={styles.feedbackContainerEl}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CommentsScreen")}
                  >
                    <FontAwesome name="comment-o" size={24} color="#FF6C00" />
                  </TouchableOpacity>
                  <Text>0</Text>
                </View>
              </View>

              <View
                style={[styles.feedbackContainerEl, styles.localionPosition]}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("MapScreen")}
                >
                  <SimpleLineIcons
                    style={styles.locationIcon}
                    name="location-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
                <Text style={styles.locationIconTitle}>Ukraine</Text>
              </View>
            </View>
          </View>
          <View>
            <Image style={styles.contentImage} source={sea} />
            <Text style={styles.contentTitle}>Захід на Чорному морі</Text>
            <View style={styles.feedbackContainer}>
              <View style={styles.feedbackContainerLeftEl}>
                <View style={styles.feedbackContainerEl}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CommentsScreen")}
                  >
                    <FontAwesome name="comment-o" size={24} color="#FF6C00" />
                  </TouchableOpacity>
                  <Text>0</Text>
                </View>
              </View>

              <View
                style={[styles.feedbackContainerEl, styles.localionPosition]}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("MapScreen")}
                >
                  <SimpleLineIcons
                    style={styles.locationIcon}
                    name="location-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
                <Text style={styles.locationIconTitle}>Ukraine</Text>
              </View>
            </View>
          </View>
          <View>
            <Image style={styles.contentImage} source={house} />
            <Text style={styles.contentTitle}>Старий будиночок у Венеції</Text>
            <View style={styles.feedbackContainer}>
              <View style={styles.feedbackContainerLeftEl}>
                <View style={styles.feedbackContainerEl}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CommentsScreen")}
                  >
                    <FontAwesome name="comment-o" size={24} color="#FF6C00" />
                  </TouchableOpacity>
                  <Text>0</Text>
                </View>
              </View>

              <View
                style={[styles.feedbackContainerEl, styles.localionPosition]}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("MapScreen")}
                >
                  <SimpleLineIcons
                    style={styles.locationIcon}
                    name="location-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
                <Text style={styles.locationIconTitle}>Italy</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  scrollView: {
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
    marginLeft: 40,
  },

  textName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  textEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
  contentContainer: {
    borderRadius: 8,
    alignItems: "center",
    gap: 16,
    marginTop: 32,
  },

  closeBtn: {
    position: "absolute",
    bottom: 10,
    right: -10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  contentTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    marginTop: 8,
  },
  feedbackContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  feedbackContainerEl: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  localionPosition: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  locationIconTitle: {
    textDecorationLine: "underline",
  },
  feedbackContainerLeftEl: {
    flexDirection: "row",
    gap: 16,
  },
});
