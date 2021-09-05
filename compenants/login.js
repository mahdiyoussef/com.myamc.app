
import Expo from 'expo';
import React,{ Component,useState } from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking,Alert} from 'react-native';
import {StackNavigator, useTheme} from 'react-navigation';
import firebase from 'firebase';
import 'react-native-gesture-handler';
import profiler from './rpage';
import Registre from './registration';
import './firebase/firebase';
import profilec from './profile';


export default function login ({navigation}){
  const [data, setData] = useState('');

  const uservalue=()=>{
    console.log('1301')
    return usr;
  }
  const logtocomp = () => {
    setData(usr);
  }  
      
  const [designers, setDesigners] = useState([]);
    function printUsers() {
        var users = firebase.database().ref('/userlogin');
        users.on('value', (snapshot) => {
            snapshot.forEach((snap) => {
                const userObject = snap.val();
                const role = userObject['id'];
                console.log(role);
                if (role === usr) {
                    const newDesigners = [...designers, userObject];
                    setDesigners(newDesigners);
                    designers.map((user)=>{
                      console.log(user.mdp)
                      if(user.mdp === mdp){
                        navigation.navigate('MyAMC',user);
                        
                        
                      };
                    });
                };
                
                
            });
        });
    }
   
  const onPressHandlersign=() =>{
    navigation.navigate('Senregistrer');
  };
  

  const [usr,getusr]=useState('');
  const [mdp,getmdp]=useState('');
   
  
  return(<View style={styles.container}>
        
        <View style={styles.special}><Image  source={require('../images/logo.png')} /></View>
        <View style={styles.inpone}>
          <Image source={require('../images/id.png')} />
          <TextInput  placeholder="Identifiant" value={usr} onChangeText={(text)=>getusr(text)}  /></View>
        <View style={styles.inptwo}>
          <Image source={require('../images/lock.png')} />
          <TextInput  placeholder="Mot de Passe" value={mdp} onChangeText={(text)=>getmdp(text)}/></View>
        <TouchableOpacity style={styles.btno} onPress={printUsers} >
        <Text style = {{color:'white',fontSize:20,paddingHorizontal:50,paddingVertical:10}} >
        Se Connecter
      </Text>
      </TouchableOpacity >
        <Text style={styles.txts}>si vous n'avez pas un compte cliquez sur :</Text>

          
        <TouchableOpacity style={styles.btnt} onPress={onPressHandlersign}>
        <Text style={{color:'white',fontSize:20,paddingHorizontal:50,paddingVertical:10}}>
        Créez Votre Compte
      </Text>
        </TouchableOpacity >
        
    
      </View>);
        
  
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  },
  inpone:{
    marginTop:60,
    fontSize:20,
    borderRadius:6,
    borderWidth:1,
    color:'#535c68',
    borderColor:'#535c68',
    /*paddingVertical:10,
    paddingHorizontal:90,*/
    width:250,
    height:50,
    padding:5,
    
    alignItems:'center'
    
  } ,
  inptwo:{
    marginTop:30,
    fontSize:20,
    borderRadius:6,
    borderWidth:1,
    color:'#535c68',
    borderColor:'#535c68',
    /*paddingVertical:10,
    paddingHorizontal:90,*/
    width:250,
    height:50,
    padding:5,
    alignItems:'center'
  },
  btno:{
    marginTop:30,
    fontSize:20,
    borderRadius:6,
    backgroundColor:'#34495e'
    
  },
  btnt: {
    marginTop:30,
    fontSize:20,
    borderRadius:6,
    backgroundColor:'#34495e'

  },
  txts:{
    marginTop:30,
    fontSize:20
  },
  title:{
    fontFamily:"Roboto",
    fontSize:30,
    color:'white',
    
  },
  special:{
    alignItems:'center'
  }
  ,
  specialb:{
    height:10,
    position:'absolute',
    top:0,
    
  }
  
});
