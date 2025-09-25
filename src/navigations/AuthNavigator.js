import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import SignUpOtp from "../screens/SignUpOtp";
import SetPin from "../screens/SetPin";
import OtpVerify from "../screens/OtpVerify";
import EnterPin from "../screens/EnterPin";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUpOtp" component={SignUpOtp} />
      <Stack.Screen name="SetPin" component={SetPin} />
      <Stack.Screen name="OtpVerify" component={OtpVerify} />
      <Stack.Screen name="EnterPin" component={EnterPin} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
