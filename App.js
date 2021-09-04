import Expo from 'expo';
import React,{ Component } from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking} from 'react-native';
import {StackNavigator} from 'react-navigation';
;
import 'react-native-gesture-handler';
import Navigator from './routes/homeStack';

export default function app({navigation}){
  return (<Navigator />)
};
