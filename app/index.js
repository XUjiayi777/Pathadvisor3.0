// This file shows the actual home page
import {useState} from 'react';
import {View,Text,ScrollView,SafeAreaView} from 'react-native';
import {Stack,useRouter} from 'expo-router';

import {COLORS,icons,images,SIZES} from '../constants';

const Home =()=>{
    return (
        <View>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'blue'}}>
                   Home </Text>
            <Text>User Interface</Text>
        </View>
    )
}

export default Home;