import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Container, Content, Text, Button } from "native-base";

export default (LunchGroup = props => {
  return (
    <Container>
      <Content padder>
        <Text style={styles.headerText}>Congrats! You have a lunch group!</Text>
        <View style={styles.avatarsContainer}>
          <Image
            source={require("../assets/images/robot-dev.png")}
            style={styles.avatarImage}
          />
          <Image
            source={require("../assets/images/robot-dev.png")}
            style={styles.avatarImage}
          />
          <Image
            source={require("../assets/images/robot-dev.png")}
            style={styles.avatarImage}
          />
          <Image
            source={require("../assets/images/robot-dev.png")}
            style={styles.avatarImage}
          />
          <Image
            source={require("../assets/images/robot-dev.png")}
            style={styles.avatarImage}
          />
          <Image
            source={require("../assets/images/robot-dev.png")}
            style={styles.avatarImage}
          />
        </View>
        <Text style={styles.infoText}>Category: Korean</Text>
        <Text style={styles.infoText}>Leaving at: 12:00 PM</Text>
        <Text style={styles.infoText}>Meet at: 11th floor lobby</Text>
      </Content>
      <Button danger full>
        <Text>10:00 left to cancel</Text>
      </Button>
    </Container>
  );
});

LunchGroup.navigationOptions = {
  title: "Your Group"
};

const styles = StyleSheet.create({
  headerText: {
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
    color: "rgba(0,0,0,0.4)",
    fontSize: 20
  },
  avatarsContainer: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 20
  },
  avatarImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginHorizontal: 10,
    marginVertical: 20
  },
  infoText: {
    marginVertical: 4
  }
});
