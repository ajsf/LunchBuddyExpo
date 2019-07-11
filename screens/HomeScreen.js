import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  List,
  ListItem
} from "native-base";
import ActivityItem from "../components/ActivityItem";

export default (HomeScreen = props => {
  return (
    <Container>
      <View style={styles.welcomeContainer}>
        <Image
          source={
            __DEV__
              ? require("../assets/images/robot-dev.png")
              : require("../assets/images/robot-prod.png")
          }
          style={styles.welcomeImage}
        />
        <View>
          <Text style={styles.welcomeText}>Welcome User!</Text>
          <Text style={styles.welcomeText}>Rank: </Text>
        </View>
      </View>
      <View style={styles.activityContainer}>
        <Button
          block
          transparent
          onPress={() => props.navigation.navigate("BookLunch")}
        >
          <Text>Find lunch buddies!</Text>
        </Button>
      </View>
      <Text style={styles.activitiesHeader}>Your Activities:</Text>
      <Content padder>
        <List>
          <ActivityItem
            description={
              "Dined out with Ginny, Scott and Haocen on 7/13/19 at a Korean restaurant."
            }
          />
          <ActivityItem
            description={
              "Picked up take-out for Aaron on 7/13/19 from a Korean restaurant."
            }
          />
        </List>
      </Content>
    </Container>
  );
});

HomeScreen.navigationOptions = {
  title: "Lunch Buddy"
};

const styles = StyleSheet.create({
  activitiesHeader: {
    alignSelf: "center"
  },
  activitiesItem: {
    paddingTop: 8,
    paddingBottom: 8
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30
  },
  welcomeText: {
    marginBottom: 10,
    color: "rgba(0,0,0,0.4)",
    fontSize: 20
  },
  contentContainer: {
    paddingTop: 10
  },
  welcomeContainer: {
    flex: 0,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginRight: 10
  },
  activityContainer: {
    flex: 0,
    height: 150,
    justifyContent: "center",
    marginBottom: 50
  },
  pastActivitiesContainer: {
    flex: 1
  }
});
