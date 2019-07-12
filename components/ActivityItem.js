import React from "react";
import { Text, ListItem } from "native-base";

const ActivityItem = props => {
  return (
    <ListItem>
      <Text>{props.description}</Text>
    </ListItem>
  );
};

export default ActivityItem;
