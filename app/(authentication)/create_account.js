import {
  React,
  useState,
  DefaultTheme,
  Provider as PaperProvider,
} from "react";
import { View, Text, Image } from "react-native";
import { router, useRouter } from "expo-router";
import styles from "../../styles/search";
import { TextInput, Button } from "react-native-paper";

const CreateAccountScreen = ({}) => {
  const [text, setText] = useState("");
  return (
    <View>
      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/icons/add-user.png")}
          style={styles.icon}
        />
        <Text>iLocate</Text>
      </View>
      <View>
        <TextInput
          label="Phone number"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          style={styles.Textinput}
        />
        <TextInput
          label="Verfication code"
          // value={text}
          // onChangeText={(text) => setText(text)}
          mode="outlined"
          style={styles.Textinput}
        />
      </View>
      <Button
        // icon="camera"
        mode="contained"
        onPress={() => router.push("/login")}
      >
        Go to Login
      </Button>
    </View>
  );
};

export default CreateAccountScreen;
