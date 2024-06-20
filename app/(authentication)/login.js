import React from "react";
import { View, Text, Button } from "react-native";
import { router, useRouter } from "expo-router";

const LoginScreen = ({}) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Home" onPress={() => router.push("home")} />
    </View>
  );
};

export default LoginScreen;
