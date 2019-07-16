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
      App: MainTabNavigator,
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
