// This file shows the actual home page
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { router, useRouter, Link } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

const Home = () => {
  const onPressHandler = () => {
    // Handle button press here
    console.log("Button pressed!");
  };
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "blue" }}>
        Home{" "}
      </Text>
      <Text>User Interface</Text>
      <TouchableOpacity
        onPress={onPressHandler}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Image
          source={require("../assets/icons/google.png")}
          style={{ width: 50, height: 50, marginRight: 10, zIndex: 1 }}
        />
        <Text style={{ fontSize: 20, color: "black" }}>Start Positioning!</Text>
      </TouchableOpacity>
      <Button
        title="Go to create account"
        onPress={() => router.push("/create_account")}
      />
    </View>
  );
};

export default Home;
