import React from "react";
import { Text, Right, Body, Icon, ListItem } from "native-base";

const OfficeLocation = props => (
  <ListItem button onPress={() => props.next()}>
    <Body>
      <Text>{props.description}</Text>
    </Body>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

export default OfficeLocation;
