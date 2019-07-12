import React from "react";
import { Image, StyleSheet } from "react-native";
import { Container, Content, Text, List } from "native-base";
import OfficeLocation from "../components/OfficeLocation";

export default (SelectOffice = props => {
  return (
    <Container>
      <Container style={styles.container}>
        <Image
          source={
            __DEV__
              ? require("../assets/images/robot-dev.png")
              : require("../assets/images/robot-prod.png")
          }
          style={styles.welcomeImage}
        />
        <Text style={styles.connectText}>What floor is your team on?</Text>
        <Text style={styles.selectText}>Connect to people you know.</Text>
      </Container>
      <Content>
        <List>
          <OfficeLocation
            description="11th Floor"
            next={() => props.navigation.navigate("App")}
          />
        </List>
      </Content>
    </Container>
  );
});

SelectOffice.navigationOptions = {
  title: "Select A Floor"
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },
  connectText: {
    marginTop: 10,
    marginBottom: 10,
    color: "rgba(0,0,0,0.4)",
    fontSize: 20
  },
  selectText: {
    marginBottom: 10,
    color: "rgba(0,0,0,0.4)",
    fontSize: 15
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginRight: 10
  }
});
