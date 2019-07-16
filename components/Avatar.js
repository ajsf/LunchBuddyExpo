import React from "react";
import { Image, StyleSheet } from "react-native";

const images = {
  user1: require("../assets/images/users/user1.png"),
  user2: require("../assets/images/users/user2.png"),
  user3: require("../assets/images/users/user3.png"),
  user4: require("../assets/images/users/user4.png"),
  user5: require("../assets/images/users/user5.png"),
}

const Avatar = props => {
  return (
    <Image
      source={images[props.user]}
      style={styles.avatarImage}
    />
  );
};

const styles = StyleSheet.create({
  avatarImage: {
    width: "27%",
    height: 100,
    overflow: "hidden",
    resizeMode: "cover",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1
  }
});

export default Avatar;
