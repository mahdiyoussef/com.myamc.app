import Expo from 'expo';
import React,{useState,useEffect} from 'react';
import { Component } from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking, ScrollView,FlatList,Alert} from 'react-native';
import {StackNavigator,navigation} from 'react-navigation';
import firebase from 'firebase';
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
useEffect(() => {
  printds();
  
}, []);
const [designers, setDesigners] = useState([]);
    

    
function printds() {
        var users = firebase.database().ref('/dossiermedicales/');
        users.on('value', (snapshot) => {
            snapshot.forEach((snap) => {
                const userObject = snap.val();
                const role = userObject['id'];
                console.log(role);
                if (role === navigation.getParam('id')) {
                  console.log(userObject.nd);
                    const newDesigners = [...designers, userObject];
                    setDesigners(newDesigners);
                }
            });
        });
    }

  return(<View style={styles.con}>
    <View style={{marginHorizontal:5,marginTop:8}}>
    <Text style={styles.navway2}><Image source={require('../images/jn.png')}/>{' '}Mes Dossiers</Text>
    </View>
    <View>
      <FlatList data={designers} renderItem={item=>(
      <TouchableOpacity>
            <Image source={require('../images/attacher.png')}/>
            <Text>Numero du dossier{item.nd}</Text>
          </TouchableOpacity>)}/>
          
       
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