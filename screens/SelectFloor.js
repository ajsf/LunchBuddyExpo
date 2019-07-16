import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, List } from "native-base";
import OfficeLocation from "../components/OfficeLocation";
import MyText from "../components/MyText";
import Logo from "../components/Logo";

export default (SelectOffice = props => {
  return (
    <Container>
      <Logo />
      <MyText style={styles.connectText}>What floor is your team on?</MyText>
      <MyText style={styles.selectText}>Connect to people you know.</MyText>
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
  connectText: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20
  },
  selectText: {
    alignSelf: "center",
    marginBottom: 10,
    fontSize: 15
  }
});
