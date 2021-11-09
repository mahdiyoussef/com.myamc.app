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

export default function changerNrib ({navigation}){
    const [lastv,getlastv]=useState('');
    const [newV,setNewV]=useState('');
    const [sign,getsign]=useState("");
    const rtv=()=>{
        if(sign==="cc"){
            return(<View style={{flexDirection:'row',alignItems:'center'}}><Image source={require('../images/tick-mark.png')} /><Text style={{fontFamily:'jl',color:'green',fontSize:20}}>opération à succès</Text></View>)
        }
        else if(sign==="nc"){
            return(<View style={{flexDirection:'row',alignItems:'center'}}><Image source={require('../images/warning.png')} /><Text style={{fontFamily:'jl',color:'red',fontSize:20}}>information incorrect</Text></View>)
        }
    }
    const validate=()=>{
        var id=navigation.getParam('userId');
        var keyuser=navigation.getParam('keyUser');

        var userlog=firebase.database().ref('sclient/');
        userlog.on('value',(snapshot)=>{
            snapshot.forEach((snap)=>{
                console.log('entred')
                const sclient=snap.val();
                const rib=sclient['rib'];
                const idUser=sclient['id'];
                if(idUser===id){
                    console.log('correct id')
                    if(rib===lastv){
                        console.log(keyuser);
                        var updated=firebase.database()
                        .ref('/sclient/'+keyuser)
                        .update({
                        rib:newV,
                        }).then(() => getsign("cc"));
                        getlastv(newV);
                    }
                    else if(rib!=lastv){
                        getsign("nc");
                    }

                }
            })
        })
    }
        return(<View style={{width:'100%',height:'100%',alignItems:'center'}}>
            <View style={{marginTop:30,flexDirection:'row',paddingBottom:5,
                borderRadius:12,
                backgroundColor:'#B53471',
                fontFamily:'jl',paddingHorizontal:60,marginHorizontal:10,alignItems:'center',paddingTop:14,paddingBottom:14}}>
            <Image  source={require('../images/bank.png')} />
                <Text style={styles.title}>{' '}Changer Votre Rib </Text>
            </View>
            
            <Text style={styles.ancien}>Ancien Rib</Text>
            <TextInput  style={styles.inp} value={lastv} placeholder="Entrez l'ancien Rib" onChangeText={(text)=>getlastv(text)} keyboardType='numeric' />
            <Text style={styles.ancien}>Nouveau Rib</Text>
            <TextInput style={styles.inp} value={newV} onChangeText={(text)=>setNewV(text)} placeholder="Entrez le Nouveau Rib" keyboardType='numeric'/>
            <TouchableOpacity onPress={validate}>
                    <View style={styles.valider}>
                        <Image source={require('../images/check.png')}/>
                        <Text style={{fontSize:30,fontFamily:'jl',color:'white'}}>Valider la Modification</Text>
                    </View>
                </TouchableOpacity>
                <View>{rtv()}</View>
        </View>)}

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
        fontSize:20,
        fontFamily:'jl',
        marginTop:20,
        textAlign:'center'
    }
    ,valider:{
        borderRadius:12,
        width:300,
        height:50,
        backgroundColor:'#00cec9',
        marginTop:20,
        alignItems:'center',
        flexDirection:'row',
        padding:15  
    }
})