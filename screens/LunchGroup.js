import React from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Button } from "native-base";
import MyText from "../components/MyText";
import Avatar from "../components/Avatar";

export default class LunchGroup extends React.Component {
  constructor(props) {
    super(props);
    console.log("Lunch group props:", props);
    const lunch = props.navigation.getParam("lunch");
    console.log(lunch);
    const currentTime = new Date();
    const lunchTime = new Date(currentTime.getTime() + 60000 * 20);
    this.state = {
      timer: null,
      lunchTime: lunchTime
        .toLocaleString([], {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit"
        })
        .substr(),
      counter: (lunchTime.getTime() - currentTime.getTime()) / 1000 - 600
    };
  }

  componentDidMount() {
    const timer = setInterval(this.tick.bind(this), 1000);
    this.setState({ timer: timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick() {
    if (this.state.counter == 0) {
      clearInterval(this.state.timer);
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    let cancelButton = null;
    const { counter } = this.state;

    if (counter > 0) {
      const date = new Date(null);
      date.setSeconds(counter);
      const timeString = date.toISOString().substr(11, 8);
      cancelButton = (
        <Button
          danger
          full
          onPress={() =>
            this.props.navigation.navigate("Home", {
              lunch: undefined
            })
          }
        >
          <MyText>{timeString} left to cancel</MyText>
        </Button>
      );
    }

    return (
      <Container>
        <Content padder>
          <MyText style={styles.headerText}>
            Congrats! You have a lunch group!
          </MyText>
          <View style={styles.avatarsContainer}>
            <Avatar user="user1" />
            <Avatar user="user2" />
            <Avatar user="user3" />
            <Avatar user="user4" />
            <Avatar user="user5" />
          </View>
          <MyText style={styles.infoText}>Category: Korean</MyText>
          <MyText style={styles.infoText}>
            Leaving at: {this.state.lunchTime}
          </MyText>
          <MyText style={styles.infoText}>Meet at: 11th floor lobby</MyText>
        </Content>
        {cancelButton}
      </Container>
    );
  }
}

LunchGroup.navigationOptions = {
  title: "Your Group"
};

const styles = StyleSheet.create({
  headerText: {
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    fontFamily: "Helvetica"
  },
  avatarsContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 20
  },
  avatarImage: {
    width: "27%",
    height: 100,
    overflow: "hidden",
    resizeMode: "cover",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1
  },
  infoText: {
    marginVertical: 4,
    fontFamily: "Helvetica"
  }
});
