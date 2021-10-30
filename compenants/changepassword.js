import Expo from 'expo';
import React,{ Component,useState} from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking,Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import firebase from 'firebase';
import 'react-native-gesture-handler';
import profiler from './rpage';
import Registre from './registration';
import * as Font from 'expo-font';
import './firebase/firebase'
import { not } from 'react-native-reanimated';

export default function changerNpassowrd ({navigation}){
    const [lastv,getlastv]=useState('');
    const [newV,setNewV]=useState('');
    
    const validate=()=>{
        var id=navigation.getParam('userId');
        var keyuser=navigation.getParam('keyUser');

        var userlog=firebase.database().ref('userlogin/');
        userlog.on('value',(snapshot)=>{
            snapshot.forEach((snap)=>{
                console.log('entred')
                const userLogin=snap.val();
                const mdpasse=userLogin['mdp'];
                const idUser=userLogin['id'];
                console.log(mdpasse)
                if(idUser===id){
                    console.log('correct id')
                    if(mdpasse===lastv){
                        
                        console.log('correct mdp check'+keyuser);
                        var updated=firebase.database()
                        .ref('/userlogin/'+keyuser)
                        .update({
                        mdp:newV,
                        }).then(() => Alert.alert("✅ l'Opération à Succès"));
                        getlastv(newV); 
                    }
                    

                } 
            })
        })
    }
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
                <TouchableOpacity onPress={validate} > 
                    <View style={styles.valider}>
                        <Image source={require('../images/check.png')}/>
                        <Text style={{fontSize:30,fontFamily:'jl',color:'white'}}>Valider la Modification</Text>
                    </View>
                    
                </TouchableOpacity>
                
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