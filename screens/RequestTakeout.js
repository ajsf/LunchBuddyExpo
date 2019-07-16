import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Picker,
  Label,
  Left,
  Right,
  Button,
  ListItem,
  Switch,
  Icon
} from "native-base";
import MyText from "../components/MyText";

export default class RequestTakeout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: undefined,
      amount: undefined,
      category: undefined
    };
  }

  onStartTimeChanged(newTime) {
    this.setState({
      startTime: newTime
    });
  }

  onAmountChanged(newAmount) {
    this.setState({
      amount: newAmount
    });
  }

  onCategoryChanged(newCategory) {
    this.setState({
      category: newCategory
    });
  }

  submitLunch() {
    this.props.navigation.navigate("Home", {
      takeout: this.state
    });
  }

  render() {
    const { startTime, amount, category } = this.state;
    const times = [
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
      "3:30 PM",
      "4:00 PM"
    ];
  
    const canSubmit = startTime && amount && category;

    return (
      <Container>
        <Content padder>
          <Form>
            <Item stackedLabel picker>
              <Label>When time do you want your food?</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={startTime}
                onValueChange={this.onStartTimeChanged.bind(this)}
              >
                {times.map(time => (
                  <Picker.Item label={time} value={time} key={time} />
                ))}
              </Picker>
            </Item>
            <Item stackedLabel picker>
              <Label>How much do you want to spend?</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={amount}
                onValueChange={this.onAmountChanged.bind(this)}
              >
                <Picker.Item label="$" value={1} />
                <Picker.Item label="$$" value={2} />
                <Picker.Item label="$$$" value={3} />
                <Picker.Item label="$$$$" value={4} />
              </Picker>
            </Item>
            <Item stackedLabel picker>
              <Label>How kind of food do you want?</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={category}
                onValueChange={this.onCategoryChanged.bind(this)}
              >
                <Picker.Item label="No preference" value={1} />
                <Picker.Item label="Chinese" value={2} />
                <Picker.Item label="Korean" value={3} />
                <Picker.Item label="American" value={4} />
                <Picker.Item label="Italian" value={5} />
                <Picker.Item label="French" value={6} />
              </Picker>
            </Item>
          </Form>
        </Content>
        <Button
          disabled={!canSubmit}
          full
          onPress={this.submitLunch.bind(this)}
        >
          <MyText>Submit</MyText>
        </Button>
      </Container>
    );
  }
}

RequestTakeout.navigationOptions = {
  title: "Request Takeout"
};
