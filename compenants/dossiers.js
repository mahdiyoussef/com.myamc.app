import Expo from 'expo';
import React,{useState} from 'react';
import { Component } from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking, ScrollView,FlatList,Alert} from 'react-native';
import {StackNavigator,navigation} from 'react-navigation';
;
import 'react-native-gesture-handler';
import { render } from 'react-dom';
import profilec from './profile';
import navbutton from './navbutton';
import * as Font from 'expo-font';
export default function dossiers({navigation}){
  Font.loadAsync({
    'query': require('../assets/fonts/query.ttf'),
    'jl':require('../assets/fonts/JosefinSans-Regular.ttf')

})
  return(<View style={styles.con}>
    <View style={{marginHorizontal:5,marginTop:8}}>
    <Text style={styles.navway2}><Image source={require('../images/jn.png')}/>{' '}Mes Dossiers</Text>
    </View>
    <View>
      <TouchableOpacity style={{marginHorizontal:5,marginTop:8}} onPress={()=>navigation.navigate('Envoyer',{id:navigation.getParam('id')})}>
        <Text style={styles.addfile}><Image source={require('../images/add-file.png')}/>Envoyer un dossier</Text>
      </TouchableOpacity>
    </View>
    </View>)
}


const styles=StyleSheet.create({
  navway2:{
    fontSize:50,
    color:'white',
    paddingBottom:10,
    borderRadius:12,
    backgroundColor:'#079992',
    fontFamily:'jl'
    
},
  addfile:{
    fontSize:45,
    color:'white',
    paddingBottom:20,
    borderRadius:12,
    backgroundColor:'#9980FA',
    paddingLeft:5,
    fontFamily:'jl'
    
  }
})