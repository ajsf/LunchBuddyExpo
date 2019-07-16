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
      <MyText style={styles.connectText}>Connect To Your Office</MyText>
      <MyText style={styles.selectText}>Select Your Location</MyText>
      <Content>
        <List>
          <OfficeLocation
            description="New York"
            next={() => props.navigation.navigate("SelectFloor")}
          />
        </List>
      </Content>
    </Container>
  );
});

SelectOffice.navigationOptions = {
  title: "Select A Location"
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
