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
export default class detailsdossier extends Component{
  render(){
    const nav=this.props.navigation;
    return(<View>
      <View style={{marginHorizontal:5,marginTop:8,flexDirection:'row',borderRadius:10,backgroundColor:'#82ccdd'}}>
        <Image source={require('../images/details.png')}/>
        <Text style={{color:'white',fontSize:50,fontFamily:'jl'}}>Details Du dossier</Text>
      </View>
      <View>
        <Text style={styles.infos}>N° Dossier:{nav.getParam('nd')}</Text>
        <Text style={styles.infos}>Nom De Personne Malade:{nav.getParam('npm')}</Text>
        <Text style={styles.infos}>type de maladie:{nav.getParam('mld')}</Text>
        <Text style={styles.infos}>Montant:{nav.getParam('mntn')}</Text>
        <Text style={styles.infos}>Date de Consultaion:{nav.getParam('jourc')}/{nav.getParam('moisc')}/{nav.getParam('annec')}</Text>
        <Text style={styles.infos}>Date de depot:{nav.getParam('jourd')}/{nav.getParam('moisd')}/{nav.getParam('anned')}</Text>
        <Text style={styles.infos}>Motif:{nav.getParam('motif')}</Text>
        <Text style={styles.infos}>Sort:{nav.getParam('sort')}</Text>
      </View>
    </View>)
  }
}
const styles=StyleSheet.create({
  infos:{
    fontSize:30
        ,
    borderRadius:10
    ,marginTop:10,
    backgroundColor:'#40739e'
    ,padding:6,
    margin:5,
    fontFamily:'jl',
    color:'white'
  }
})