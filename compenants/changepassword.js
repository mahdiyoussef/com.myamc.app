import Expo from 'expo';
import React,{ Component,useState} from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking,Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import firebase from 'firebase';
import 'react-native-gesture-handler';
import profiler from './rpage';
import Registre from './registration';
import './firebase/firebase';
import * as Font from 'expo-font';

export default function changerNpassowrd ({navigation}){
    const [lastv,getlastv]=useState('');
    const [newV,setNewV]=useState('');
    
        return(<View style={{alignItems:'center'}}>
            <View style={{marginTop:30,flexDirection:'row',paddingBottom:5,
                borderRadius:12,
                backgroundColor:'#B53471',
                fontFamily:'jl',padding:15,marginHorizontal:10,alignItems:'center'}}>
                <Image  source={require('../images/padlock.png')} />
                <Text style={styles.title}>{' '}Changer Votre Mot de passe </Text></View>
                <Text style={styles.ancien}>Ancien Mot de passe</Text>
                <TextInput  style={styles.inp} value={lastv} placeholder="Entrez l'ancien mot de passe" onChangeText={(text)=>getlastv(text)} />
                <Text style={styles.ancien}>Nouveau Mot de passe</Text>
                <TextInput style={styles.inp} value={newV} onChangeText={(text)=>setNewV(text)} placeholder="Entrez le Nouveau Mot de passe" secureTextEntry={true} />
            
        </View>)
    
}
const styles=StyleSheet.create({
    title:{
        fontSize:30,
        color:'white',
        fontFamily:'jl'
    },
    ancien:{
        fontSize:30,
        fontFamily:'jl',
        textAlign:'center',
        marginTop:20

    },
    inp:{
        borderRadius:12,
        borderWidth:4,
        width:300,
        height:50,
        borderColor:'#00cec9',
        fontSize:30,
        fontFamily:'jl',
        marginTop:20,
        textAlign:'center'
    }
})