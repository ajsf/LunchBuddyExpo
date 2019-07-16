import React from "react";
import { AsyncStorage } from "react-native";
import { Container, Content, Button, Text } from "native-base";

export default function SettingsScreen(props) {
  const signOut = async () => {
    await AsyncStorage.removeItem("userToken");
    props.navigation.navigate("Auth");
  };

  return (
    <Container>
      <Content>
        <Button full transparent onPress={signOut}>
          <Text>Sign Out</Text>
        </Button>
      </Content>
    </Container>
  );
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};
