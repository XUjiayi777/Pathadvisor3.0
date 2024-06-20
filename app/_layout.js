import { Stack } from "expo-router";
import * as React from "react";

export default function Layout() {
  return (
    <Stack initialRouteName="Home">
      <Stack.Screen name="index" />
      <Stack.Screen
        name="(authentication)/create_account"
        options={{
          headerTitle: "Create account",
        }}
      />
      <Stack.Screen
        name="(authentication)/login"
        options={{
          headerTitle: "Login",
        }}
      />
    </Stack>
  );
}
