import React from "react";
import { AsyncStorage } from "react-native";
import {
  Input,
  Form,
  Item,
  Content,
  Container,
  Button,
  Text,
  Spinner
} from "native-base";
import Logo from "../components/Logo";
import * as api from "../api/Api";

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  state = {
    username: undefined,
    password: undefined,
    error: false,
    loading: false
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

    const error =
      this.state.error.length > 0 ? (
        <Text
          style={{
            paddingVertical: 10,
            paddingHorizontal: 25,
            color: "red"
          }}
        >
          {this.state.error}
        </Text>
      ) : null;

    return (
      <Container>
        <Content>
          <Logo />
          {error}
          {this.state.loading ? <Spinner color="blue" /> : null}
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

  signInSuccess = async user => {
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({
        name: `${user.firstName} ${user.lastName}`,
        rank: user.ranking,
        id: user.userId
      })
    );
    if (user.officeFloor.officeId > 1) {
      this.props.navigation.navigate("Home", { user });
    } else {
      const res = await api.getOffices();
      const offices = res.data.office.filter(o => o.officeId != 1);
      this.props.navigation.navigate("SelectOffice", { offices });
    }
  };

  signInFail = msg => {
    this.setState({
      error: msg,
      loading: false
    });
  };

  _signInAsync = async () => {
    this.setState({
      error: "",
      loading: true
    });
    try {
      const res = await api.login(this.state.username, this.state.password);
      if (res.data.status == 1) {
        this.signInSuccess(res.data.user);
      } else {
        this.signInFail(
          "The username or password you entered is invalid. Please try again."
        );
      }
    } catch (error) {
      this.signInFail(
        "There was a network error when logging in. Plase check your network connection and try again."
      );
    }
  };
}

export default SignInScreen;
