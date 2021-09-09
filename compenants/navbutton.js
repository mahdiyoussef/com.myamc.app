import Expo from 'expo';
import React,{ Component } from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking,Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import firebase from 'firebase';
import 'react-native-gesture-handler';
import profiler from './rpage';
import Registre from './registration';
import './firebase/firebase';
import * as Font from 'expo-font';


 export default function navbutton ({navigation}){
        Font.loadAsync({
            'qeury': require('../assets/fonts/query.ttf'),
            'jl':require('../assets/fonts/JosefinSans-Regular.ttf')

        })
    return(<View style={styles.nav}>
        <TouchableOpacity style={{marginHorizontal:5,marginTop:8}} onPress={()=>navigation.navigate('MyAMC')}>
            <Text style={styles.navway12}>{' '}<Image  source={require('../images/dashboard.png')} />{' '}Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:5,marginTop:8}} onPress={()=>navigation.navigate('MonCompte',{id:navigation.getParam('id')})}>
            <Text style={styles.navway}>{' '}<Image  source={require('../images/teamwork.png')} />{' '}Mon Compte</Text>
        </TouchableOpacity>
            
        <TouchableOpacity style={{marginHorizontal:5,marginTop:8}} onPress={()=>navigation.navigate('MesDemandes',{id:navigation.getParam('id')})}>
            <Text style={styles.navway1}>{' '}<Image source={require('../images/chat.png')}/>{' '}Mes Demandes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:5,marginTop:8}} onPress={()=>navigation.navigate('MesDossiers',{id:navigation.getParam('id')})}>
        <Text style={styles.navway2}><Image source={require('../images/jn.png')}/>{' '}Mes Dossiers</Text>
        </TouchableOpacity>
            
        <TouchableOpacity style={{marginHorizontal:5,marginTop:8}}>
        <Text style={styles.navway3}><Image source={require('../images/guide.png')}/>{' '}Guide d'Application</Text>
            
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:5,marginTop:8}} onPress={()=>navigation.navigate('seConnecter')}>
        <Text style={styles.navway33}><Image source={require('../images/logout.png')}/>{' '}Se déconnecter</Text>
            
        </TouchableOpacity>
    </View>);
    
 }
 const styles=StyleSheet.create({
    nav:{
        height:'100%'
    },
    navway:{
        fontSize:50,
        color:'white',
        paddingBottom:10,
        borderRadius:12,
        backgroundColor:'#00d8d6',
        fontFamily:'jl'
    },
    navway1:{
        fontSize:50,
        color:'white',
        paddingBottom:10,
        borderRadius:12,
        backgroundColor:'#ffd32a',
        fontFamily:'jl'
    },
    navway2:{
        fontSize:50,
        color:'white',
        paddingBottom:10,
        borderRadius:12,
        backgroundColor:'#079992',
        fontFamily:'jl'
        
    },
    navway3:{
        fontSize:45,
        color:'white',
        paddingBottom:5,
        borderRadius:12,
        backgroundColor:'#B53471',
        fontFamily:'jl',paddingBottom:10
        
    },
    navway12:{
        fontSize:50,
        color:'white',
        paddingBottom:10,
        borderRadius:12,
        backgroundColor:'#9980FA',
        fontFamily:'jl'
    },
    navway33:{
        fontSize:50,
        color:'white',
        paddingBottom:10,
        borderRadius:12,
        backgroundColor:'#1289A7',
        fontFamily:'jl'
    }
 })