import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";
import SelectOfficeScreen from "../screens/SelectOffice";
import SelectFloorScreen from "../screens/SelectFloor";


const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  SelectOffice: SelectOfficeScreen,
  SelectFloor: SelectFloorScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      App: MainTabNavigator,
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
