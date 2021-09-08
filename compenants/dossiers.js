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
export default class dossiers extends Component{
  
  constructor(props){
    super(props);
    this.state={ 
    list:[],
    } }
     componentDidMount(){
       firebase.database().ref('/dossiermedicales').on('value', (snapshot) =>{
         var li = []
         snapshot.forEach((dossier)=>{
           if(dossier.val().id===this.props.navigation.getParam('id')){
          /*li.push({
           npm:dossier.val().npm,
           nd: dossier.val().nd,
           id:dossier.val().id,
           ad:dossier.val().anneed,
           jd:dossier.val().jourd,
           md:dossier.val().moisd,

         })*/
         li.push(dossier.val())
         }
       })
      this.setState({list:li})
     })
    }  
  render(){

  return(<View style={styles.con}>
    <View style={{marginHorizontal:5,marginTop:8}}>
    <Text style={styles.navway2}><Image source={require('../images/jn.png')}/>{' '}Mes Dossiers</Text>
    </View>
    <View>
    <FlatList
          data={this.state.list}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
             return(
                <View>
                   <Text>{item.id} {'\n'} {item.nd}</Text>
                </View>)
             }}/>
       
    </View>
    </View>)
}}



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