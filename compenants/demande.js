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
function statusIcon(status){
  if(status==="Accepter" ){
      return(<View><Image source={require('../images/tick-mark.png')}/></View>)
  }
  else if(status==="en cours" ){
      return(<View><Image source={require('../images/prg.png')}/></View>)
  }
  else{
      return(<View><Image source={require('../images/warning.png')}/></View>)
  }
}
export default class demandes extends Component{
  
  constructor(props){
    super(props);
    this.state={ 
    list:[],
    } }
     componentDidMount(){
       firebase.database().ref('/demandedeclient').on('value', (snapshot) =>{
         var li = []
         snapshot.forEach((demande)=>{
           if(demande.val().id===this.props.navigation.getParam('id')){
         li.push(demande.val())
         }
       })
      this.setState({list:li})
     })
    }  
  render(){

  return(<View style={styles.con}>
    <View style={{marginHorizontal:5,marginTop:30}}>
    <Text style={styles.navway2}><Image source={require('../images/chat.png')}/>{' '}Mes Demandes</Text>
    </View>
    <View>
    <FlatList
          data={this.state.list}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
             return(<TouchableOpacity >
               <View style={styles.flatl}>{statusIcon(item.motif)}
               <Text style={{fontFamily:'jl',color:'white',fontSize:25,}}>N° Demande:{item.nd}{'\n'}Date de depot:{item.jourd}/{item.moisd}/{item.anned}{'\n'}Objet:{item.objet}{'\n'}Status:{item.motif}</Text></View>
             </TouchableOpacity>)
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
    backgroundColor:'#ffd32a',
    fontFamily:'jl'
    
},
  flatl:{
    
    
    paddingBottom:20,
    borderRadius:12,
    backgroundColor:'#9980FA',
    paddingLeft:5,
    flexDirection:'row',
    marginVertical:8,
    marginHorizontal:8,
    alignItems:'center',
    
  }
})