// This file shows the actual home page
import { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { Asset } from "expo-asset";
import { router, useRouter, Link } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Accelerometer,Gyroscope,Magnetometer } from "expo-sensors";
// import {useTensorflowModel} from 'react-native-fast-tflite'


const Home = () => {
  const onPressHandler = () => {
    console.log("Button pressed!");
  };
  
  const [accdata, setAccData] = useState({ x: 0, y: 0, z: 0 });
  const [gyrodata, setGyroData] = useState({ x: 0, y: 0, z: 0 });
  const [magdata, setMagData] = useState({ x: 0, y: 0, z: 0 });
  const [imuData, setImuData] = useState([]);
  const [model, setModel] = useState(null);
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    Accelerometer.setUpdateInterval(100);
    Gyroscope.setUpdateInterval(100);
    Magnetometer.setUpdateInterval(100);
    setSubscription(Accelerometer.addListener(setAccData),Gyroscope.addListener(setGyroData),Magnetometer.addListener(setMagData));
  };

  const _unsubscribe = () => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }
  };


  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);


  return (
    <View style={{ padding: 20 }}>
    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Accelerometer:</Text>
    <View style={{ flexDirection: "column", justifyContent: "space-between",marginBottom:"10" }}>
      <Text>X: {accdata.x.toFixed(4)}</Text>
      <Text>Y: {accdata.y.toFixed(4)}</Text>
      <Text>Z: {accdata.z.toFixed(4)}</Text>
    </View>

    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Gyroscope:</Text>
    <View style={{ flexDirection: "column", justifyContent: "space-between",marginBottom:"10" }}>
      <Text>X: {gyrodata.x.toFixed(4)}</Text>
      <Text>Y: {gyrodata.y.toFixed(4)}</Text>
      <Text>Z: {gyrodata.z.toFixed(4)}</Text>
    </View>

    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Magnetometer:</Text>
    <View style={{ flexDirection: "column", justifyContent: "space-between",marginBottom:"10" }}>
      <Text>X: {magdata.x.toFixed(4)}</Text>
      <Text>Y: {magdata.y.toFixed(4)}</Text>
      <Text>Z: {magdata.z.toFixed(4)}</Text>
    </View>
      <Button
        title="Go to create account"
        onPress={() => router.push("/create_account")}
      />
    </View>
  );
};

export default Home;
