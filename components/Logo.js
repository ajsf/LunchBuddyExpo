import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image style={styles.logo} source={require("../assets/images/logo.png")} />
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10
  }
});

export default Logo;
