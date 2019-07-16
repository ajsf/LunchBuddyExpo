import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, List } from "native-base";
import OfficeLocation from "../components/OfficeLocation";
import MyText from "../components/MyText";
import Logo from "../components/Logo";

export default (SelectOffice = props => {
  const floorSelected = (floorId, officeId) => {
    //this is where the api call to save the floorId and officeId would go
    props.navigation.navigate("App");
  };

  const floors = props.navigation.getParam("floors");
  console.log(floors);

  const floorViews = floors.map(floor => (
    <OfficeLocation
      description={floor.floor}
      key={floor.officeFloorId}
      next={() => floorSelected(floor.officeFloorId, floor.officeId)}
    />
  ));

  return (
    <Container>
      <Logo />
      <MyText style={styles.connectText}>What floor is your team on?</MyText>
      <MyText style={styles.selectText}>Connect to people you know.</MyText>
      <Content>
        <List>{floorViews}</List>
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
