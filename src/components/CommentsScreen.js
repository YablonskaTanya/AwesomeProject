import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CommentsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>CommentsScreen</Text>
      <Button
        title="To LoginScreen"
        onPress={() => navigation.navigate("LoginScreen")}
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

export default CommentsScreen;
