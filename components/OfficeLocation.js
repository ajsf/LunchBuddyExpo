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

const OfficeLocation = props => (
    <ListItem button onPress={() => props.next()}  >
      <Body>
        <Text>{props.description}</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
);

export default OfficeLocation;
