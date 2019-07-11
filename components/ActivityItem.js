import React from "react";
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

const ActivityItem = (props) => {
  return (
    <ListItem>
      <Text>
        {props.description}
      </Text>
    </ListItem>
  );
};

export default ActivityItem;
