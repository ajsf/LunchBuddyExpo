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

export default class BookLunch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: undefined,
      startTime: undefined,
      endTime: undefined,
      amount: undefined,
      category: undefined,
      canPickup: false
    };
  }

  onDistanceChanged(newDistance) {
    this.setState({
      distance: newDistance
    });
  }

  onStartTimeChanged(newTime) {
    this.setState({
      startTime: newTime
    });
  }

  onEndTimeChanged(newTime) {
    this.setState({
      endTime: newTime
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

  onPickupChanged(bool) {
    this.setState({
      canPickup: bool
    });
  }

  submitLunch() {
    this.props.navigation.navigate("Home", {
      lunch: this.state
    });
  }

  render() {
    const { distance, startTime, endTime, amount, category } = this.state;
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

    const startOptions = endTime
      ? times.slice(0, times.indexOf(endTime) - 1)
      : times.slice(0, times.length - 2);
    const endOptions = startTime
      ? times.slice(times.indexOf(startTime) + 2, times.length)
      : times.slice(2, times.length);

    const canSubmit = distance && startTime && endTime && amount && category;

    return (
      <Container>
        <Content padder>
          <Form>
            <Item stackedLabel picker>
              <Label>How far are you willing to travel?</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={distance}
                onValueChange={this.onDistanceChanged.bind(this)}
              >
                <Picker.Item label="0.5 Miles" value={0} />
                <Picker.Item label="1 mile" value={1} />
                <Picker.Item label="2 miles" value={2} />
                <Picker.Item label="3 miles" value={3} />
                <Picker.Item label="4 miles" value={4} />
                <Picker.Item label="5 miles" value={5} />
                <Picker.Item label="Greater than 5 miles" value={6} />
              </Picker>
            </Item>
            <Item stackedLabel picker>
              <Label>When can you start?</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={startTime}
                onValueChange={this.onStartTimeChanged.bind(this)}
              >
                {startOptions.map(time => (
                  <Picker.Item label={time} value={time} key={time} />
                ))}
              </Picker>
            </Item>
            <Item stackedLabel picker>
              <Label>When do you need to be done by?</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={endTime}
                onValueChange={this.onEndTimeChanged.bind(this)}
              >
                {endOptions.map(time => (
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
        <ListItem stackedLabel picker>
          <Left>
            <MyText>Can you pick up take-out food?</MyText>
          </Left>
          <Right>
            <Switch
              value={this.state.canPickup}
              onValueChange={this.onPickupChanged.bind(this)}
            />
          </Right>
        </ListItem>

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

BookLunch.navigationOptions = {
  title: "Book A Lunch"
};
