import React from "react";
import { AsyncStorage } from "react-native";
import {
  Input,
  Form,
  Item,
  Content,
  Container,
  Button,
  Text
} from "native-base";
import Logo from "../components/Logo";
import api from "../api/Api";

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  state = {
    username: undefined,
    password: undefined
  };

  onUsernameChanged(username) {
    this.setState({
      username
    });
  }

  onPasswordChanged(password) {
    this.setState({
      password
    });
  }

  render() {
    const canSubmit =
      this.state.username &&
      this.state.username.length > 3 &&
      (this.state.password && this.state.password.length > 2);

    return (
      <Container>
        <Content>
          <Logo />
          <Form>
            <Item>
              <Input
                placeholder="Username"
                value={this.state.username}
                onChangeText={this.onUsernameChanged.bind(this)}
              />
            </Item>
            <Item last>
              <Input
                secureTextEntry
                placeholder="Password"
                value={this.state.password}
                onChangeText={this.onPasswordChanged.bind(this)}
              />
            </Item>
          </Form>
          <Button full disabled={!canSubmit} onPress={this._signInAsync}>
            <Text>Sign in!</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  _signInAsync = async () => {
    console.log(this.state);
    api
      .post("user/login", {
        Username: this.state.username,
        Password: this.state.password
      })
      .then(res => {
        console.log("-----------------------");
        console.log("Login response:");
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("SelectOffice");
  };
}

export default SignInScreen;
