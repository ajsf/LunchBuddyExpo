import React from "react";
import { Image, StyleSheet } from "react-native";

import { Card, CardItem, Body } from "native-base";
import MyText from "./MyText";

const images = {
  american: require("../assets/images/food/american.jpg"),
  asian: require("../assets/images/food/asian.jpg"),
  french: require("../assets/images/food/french.jpg"),
  italian: require("../assets/images/food/italian.jpg"),
  vegetarian: require("../assets/images/food/vegetarian.jpg")
};

const ActivityItem = props => {
  return (
    <Card>
      <CardItem button onPress={props.onPress}>
        <Body>
          <Image source={images[props.image]} style={styles.image} />
          <MyText style={styles.description}>{props.description}</MyText>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover"
  },
  description: {
    paddingTop: 10
  }
});

export default ActivityItem;
