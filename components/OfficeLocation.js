import React from "react";
import { Right, Body, Icon, ListItem } from "native-base";
import MyText from "./MyText";

const OfficeLocation = props => (
  <ListItem button onPress={() => props.next()}>
    <Body>
      <MyText>{props.description}</MyText>
    </Body>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

export default OfficeLocation;
