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

export default function optionschange ({navigation}){
    
        Font.loadAsync({
            'qeury': require('../assets/fonts/query.ttf'),
            'jl':require('../assets/fonts/JosefinSans-Regular.ttf')

        })
        /* '54a0ff'*/
        return(
        <View>
            <View style={{marginHorizontal:5,marginTop:40,borderRadius:12,backgroundColor:'#54a0ff',flexDirection:'row',alignItems:'center',paddingVertical:20}}>
                <Image source={require('../images/settings.png')}/>
                <Text style={{fontSize:35,color:'white',fontFamily:'jl'}}>{' '}Modifier Vos informations</Text>
            </View>
            <TouchableOpacity style={{marginHorizontal:5,marginTop:30}} onPress={()=>navigation.navigate('changerNpassword',{keyUser:navigation.getParam('keyUser'),userId:navigation.getParam('userId')})}>
            <Text style={styles.navway}>{' '}<Image  source={require('../images/padlock.png')} />{' '}Changer Votre mot de passe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:5,marginTop:30}} onPress={()=>navigation.navigate('changerNphone',{keyUser:navigation.getParam('keyT'),userId:navigation.getParam('userId')})}>
            <Text style={styles.navway1}>{' '}<Image  source={require('../images/phones.png')} />{' '}Changer votre N° Telephone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:5,marginTop:30}} onPress={()=>navigation.navigate('changerNrib',{keyUser:navigation.getParam('keyT'),userId:navigation.getParam('userId')})}>
            <Text style={styles.navway2}>{' '}<Image  source={require('../images/bank.png')} />{' '}Changer Votre RIB</Text>
        </TouchableOpacity>

        </View>)
    }

const styles=StyleSheet.create({
    navway:{
        fontSize:30,
        color:'white',
        paddingBottom:5,
        borderRadius:12,
        backgroundColor:'#B53471',
        fontFamily:'jl',paddingBottom:10
    },
    navway1:{
        fontSize:30,
        color:'white',
        paddingBottom:5,
        borderRadius:12,
        backgroundColor:'#00d2d3',
        fontFamily:'jl',paddingBottom:10 
    },
    navway2:{
        fontSize:30,
        color:'white',
        paddingBottom:5,
        borderRadius:12,
        backgroundColor:'#feca57',
        fontFamily:'jl',paddingBottom:10  
    }
})