import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
      <Button
        title="To CommentsScreen"
        onPress={() => navigation.navigate("CommentsScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreatePostsScreen;
