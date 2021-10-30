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
  if(status==="RVAC" || status==="RVCO" || status==="Accepter" ){
      return(<View><Image source={require('../images/tick-mark.png')}/></View>)
  }
  else if(status==="en cours" || status==="ov"){
      return(<View><Image source={require('../images/prg.png')}/></View>)
  }
  else{
      return(<View><Image source={require('../images/warning.png')}/></View>)
  }
}
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
         li.push(dossier.val())
         }
       })
      this.setState({list:li})
     })
    } 
  render(){
    
  return(<View style={styles.con}>
    <View style={{marginHorizontal:5,marginTop:30}}>
    <Text style={styles.navway2}><Image source={require('../images/jn.png')}/>{' '}Mes Dossiers</Text>
    </View>
    <View>
    <FlatList
          data={this.state.list}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
             return(
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details',item)}>
               <View style={styles.flatl}>{statusIcon(item.sort)}
               <Text style={{fontFamily:'jl',color:'white',fontSize:25,}}>N° Dossier:{item.nd}{'\n'}Date de Consultation:{item.jourc}/{item.moisc}/{item.annec}{'\n'}Status:{item.motif}{'\n'}{'<<< Appuyer pour voir les details >>>'}</Text></View>
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
    backgroundColor:'#079992',
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
    alignItems:'center'
  }
})