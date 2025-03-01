import { Stack } from "expo-router";
import * as React from "react";

export default function Layout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
        }}
      />
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
