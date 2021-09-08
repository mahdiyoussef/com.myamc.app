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

export default function profiler ({navigation}){
    /* main variables */
    hours= new Date().getHours();
    let salute='MyAMC'
    let nameR='Youssef mahdi'
    let msgr="Ajoute un dossier"
    const [dossier,getDossier]=useState([])
    function dossiers() {
        var dossiers = firebase.database().ref('/dossiermedicales');
        users.on('value', (snapshot) => {
            snapshot.forEach((snap) => {
                const userObject = snap.val();
                const id = userObject['id'];
                console.log(id);
                if (id === navigation.getParam('id')) {
                    const newDesigners = [...dossier, userObject];
                    getDossier(newDesigners);
                }
            });
        });
    }

   
    const randomkeys=()=>{
        return Math.floor(Math.random() * 10000) + 1
    }
    
    
    return(
        <View>
            <View style={styles.nav}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Navigation',{id:navigation.getParam('id')})
                }}><Image source={require('../images/square.png')} style={{
                    margin:8
                }} tintColor='white' /></TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate('MonCompte',{id:navigation.getParam('id')});
                }} style={styles.profile}><Image  source={require('../images/profileman.png')}  />
                </TouchableOpacity>
                <Text style={styles.topt}>MyAMC</Text>
            </View>
            <View>
               <Text style={styles.files}> <Image source={require('../images/dossier.png')}/>  Mes Dossiers Medicales</Text>
                <Text></Text>
            </View>
            <View>
                
            </View>
        </View>
    )
       
        
    }
   

const styles=StyleSheet.create({
    nav:{
        backgroundColor:'#27ae60'
    },
    profile:{
        position:'absolute',
        top:8,
        right:8
    },
    topt:{
        fontSize:60
        ,color:'white',
        position:'absolute'
        ,top:8,
        right:120
    }
    ,files:{
        
        fontSize:30
        ,borderRadius:10
        ,marginTop:10,
        backgroundColor:'#f1c40f'
        ,padding:6,
        margin:5
    }
})
