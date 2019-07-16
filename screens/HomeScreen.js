import React from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Container, Content, Button } from "native-base";

import ActivityItem from "../components/ActivityItem";
import MyText from "../components/MyText";
import Avatar from "../components/Avatar";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this.loadUserAsync();   
  }

  loadUserAsync = async () => {
    const user = await AsyncStorage.getItem("user");
    this.setState({ user: JSON.parse(user) });
  };

  render() {
    const lunch = this.props.navigation.getParam("lunch");
    const takeout = this.props.navigation.getParam("takeout");
    console.log("State", this.state)

    const activityButton = lunch ? (
      <Button
        style={styles.button}
        rounded
        onPress={() => this.props.navigation.navigate("LunchGroup", { lunch })}
      >
        <MyText>View your lunch group!</MyText>
      </Button>
    ) : (
      <Button
        style={styles.button}
        rounded
        onPress={() => this.props.navigation.navigate("BookLunch")}
      >
        <MyText>Find lunch buddies!</MyText>
      </Button>
    );

    return (
      <Container>
        <View style={styles.welcomeContainer}>
          <Avatar user="user3" />
          <View>
            <MyText style={styles.welcomeText}>
              Welcome {this.state.user.name}!
            </MyText>
            <MyText style={styles.welcomeText}>
              Rank: {this.state.user.rank}
            </MyText>
          </View>
        </View>
        <View style={styles.activityContainer}>{activityButton}</View>
        <MyText style={styles.activitiesHeader}>Your Activities:</MyText>
        <Content>
          <ActivityItem
            onPress={() => this.props.navigation.navigate("LunchGroup")}
            description="Dined out with Scott and Haocen on 7/13/19 at a Korean restaurant."
            image="asian"
          />
          <ActivityItem
            onPress={() => this.props.navigation.navigate("LunchGroup")}
            description="Picked up take-out for Aaron on 7/13/19 from an Italian restaurant."
            image="italian"
          />
        </Content>
      </Container>
    );
  }
}

HomeScreen.navigationOptions = {
  title: "Lunch Buddy"
};

const styles = StyleSheet.create({
  activitiesHeader: {
    alignSelf: "center",
    paddingTop: 15
  },
  welcomeText: {
    marginTop: 20,
    marginLeft: 5,
    fontSize: 18
  },
  welcomeContainer: {
    flex: 0,
    marginHorizontal: 10,
    flexDirection: "row",
    marginTop: 10
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginRight: 5
  },
  activityContainer: {
    paddingVertical: 15
  },
  button: {
    alignSelf: "center"
  }
});
