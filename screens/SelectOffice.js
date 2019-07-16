import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, List } from "native-base";
import OfficeLocation from "../components/OfficeLocation";
import MyText from "../components/MyText";
import Logo from "../components/Logo";
import { getFloors } from "../api/Api";

export default (SelectOffice = props => {
  const officeSelected = async officeId => {
    const response = await getFloors(officeId);
    props.navigation.navigate("SelectFloor", { floors: response.data.floor });
  };

  const offices = props.navigation.getParam("offices");
  const officeViews = offices.map(office => (
    <OfficeLocation
      description={office.location}
      key={office.officeId}
      next={() => officeSelected(office.officeId)}
    />
  ));
  return (
    <Container>
      <Logo />
      <MyText style={styles.connectText}>Connect To Your Office</MyText>
      <MyText style={styles.selectText}>Select Your Location</MyText>
      <Content>
        <List>{officeViews}</List>
      </Content>
    </Container>
  );
});

SelectOffice.navigationOptions = {
  title: "Select A Location",
  headerLeft: null
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
