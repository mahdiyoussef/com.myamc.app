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

export default function changerNphone ({navigation}){
    let [sign,getsign]=useState("");
    const rtv=()=>{
        if(sign==="cc"){
            return(<View style={{flexDirection:'row',alignItems:'center'}}><Image source={require('../images/tick-mark.png')} /><Text style={{fontFamily:'jl',color:'green',fontSize:20}}>opération à succès</Text></View>)
        }
        else if(sign==="nc"){
            return(<View style={{flexDirection:'row',alignItems:'center'}}><Image source={require('../images/warning.png')} /><Text style={{fontFamily:'jl',color:'red',fontSize:20}}>information incorrect</Text></View>)
        }
    }
    const validatenumberphone=()=>{
        var id=navigation.getParam('userId');
        var keyuser=navigation.getParam('keyUser');

        var userl=firebase.database().ref('sclient/');
        userl.on('value',(snapshot)=>{
            snapshot.forEach((snap)=>{
                console.log('entred')
                const sclient=snap.val();
                const ntel=sclient['ntel'];
                const idUser=sclient['id'];
                if(idUser===id){
                    console.log('correct id')
                    if(ntel===lastv){
                        console.log(keyuser);
                        var updated=firebase.database()
                        .ref('/sclient/'+keyuser)
                        .update({
                        ntel:newV,
                        }).then(() => {getsign("cc")
                            

                    });
                    getlastv(newV);
                    }
                    else if(ntel!=lastv && sign!="cc"){
                        getsign("nc");
                    }
                    

                }
            })
        })
    }
    let [lastv,getlastv]=useState('');
    let [newV,setNewV]=useState('');
    return(<View style={{alignItems:'center'}}>
        <View style={{marginTop:30,flexDirection:'row',
        borderRadius:12,backgroundColor:'#B53471',padding:14,marginHorizontal:10,alignItems:'center'}}>
            <Image  source={require('../images/phones.png')} /> 
            <Text style={styles.title}>{' '}Changer Votre N° Telephone </Text></View>
            <Text style={styles.ancien}>Ancien Numéro</Text>
            <TextInput  style={styles.inp} value={lastv} placeholder="Entrez l'ancien Numero" onChangeText={(text)=>getlastv(text)} keyboardType='numeric'/>
            <Text style={styles.ancien}>Nouveau Numéro</Text>
            <TextInput style={styles.inp} value={newV} onChangeText={(text)=>setNewV(text)} placeholder="Entrez le Nouveau Numero" keyboardType='numeric'/>
            <TouchableOpacity onPress={validatenumberphone}>
                    <View style={styles.valider}>
                        <Image source={require('../images/check.png')}/>
                        <Text style={{fontSize:30,fontFamily:'jl',color:'white'}}>Valider la Modification</Text>
                    </View>
                </TouchableOpacity>
            <View>{rtv()}</View>
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
        fontSize:20,
        fontFamily:'jl',
        marginTop:20,
        textAlign:'center'
    },
    valider:{
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