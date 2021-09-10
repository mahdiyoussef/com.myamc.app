
import Expo from 'expo';
import React,{ Component,useState,useEffect } from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking,Alert} from 'react-native';
import {StackNavigator, useTheme} from 'react-navigation';
import firebase from 'firebase';
import 'react-native-gesture-handler';
import profiler from './rpage';
import Registre from './registration';
import './firebase/firebase';
import profilec from './profile';
import * as Font from 'expo-font';

export default function login ({navigation}){
  const [data, setData] = useState('');
  Font.loadAsync({
    'query': require('../assets/fonts/query.ttf'),
    'jl':require('../assets/fonts/JosefinSans-Regular.ttf')

})
      
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
                        console.log(user.key)
                        navigation.navigate('MyAMC',user);
                        console.log('correcrt mdp')
                        
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
        <View style={styles.titletop}>
          <Image source={require('../images/login.png')}/>
          <Text>{' '}</Text>
          <Text style={{
            fontSize:30,
            color:'white',
            fontFamily:'jl'
          }}>Se Connecter à Votre {'\n'}Compte Amc</Text>
        </View>
        <Image source={require('../images/MyAMCVertical.png')} />
        <View style={styles.inpone}>
          <Image source={require('../images/id-card.png')} style={{
            marginRight:20,
            }}/>
          <TextInput  placeholder="Identifiant" value={usr} onChangeText={(text)=>getusr(text)} style={{
            fontFamily:'jl',fontSize:20
          }} /></View>
        <View style={styles.inptwo}>
          <Image source={require('../images/padlock.png')} style={{marginRight:20}}  />
          <TextInput secureTextEntry={true} placeholder="Mot de Passe" value={mdp} onChangeText={(text)=>getmdp(text)}style={{
            fontFamily:'jl',fontSize:20
          }}/></View>
        <TouchableOpacity style={styles.btno} onPress={printUsers} >
        
        <Text style = {{color:'white',fontSize:30,fontFamily:'jl'}} ><Image source={require('../images/login12.png')}/>{' '}
        Se Connecter
      </Text>
      </TouchableOpacity >
        <Text style={styles.txts}>Pour S'inscrire sur le Service maladie{'\n'}complémentaire  cliquer sur:</Text>

          
        <TouchableOpacity style={styles.btnt} onPress={onPressHandlersign}>
        <Text style={{color:'white',fontSize:30,fontFamily:'jl'}}>
        <Image source={require('../images/contact.png')}/>{' '}S'inscrire
      </Text>
        </TouchableOpacity >
        
    
      </View>);
        
  
}






const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    height:'100%'
  },
  inpone:{
    marginTop:60,
    fontSize:40,
    borderRadius:12,
    borderWidth:4,
    borderColor:'#0097e6',
    width:300,
    height:50,
    padding:5,
    flexDirection:"row"
    
  } ,
  inptwo:{
    marginTop:30,
    fontSize:20,
    borderRadius:12,
    borderWidth:4,
    color:'#9980FA',
    borderColor:'#fbc531',
    /*paddingVertical:10,
    paddingHorizontal:90,*/
    width:300,
    height:50,
    padding:5,
    flexDirection:"row"
  },
  btno:{
    marginTop:30,
    fontSize:20,
    borderRadius:6,
    backgroundColor:'#34495e',
    fontFamily:'jl',
    width:300,
    height:50,
    alignItems:'center'
    
  },
  btnt: {
    marginTop:30,
    fontSize:20,
    borderRadius:6,
    backgroundColor:'#34495e',
    fontFamily:'jl',
    width:300,
    height:50,
    alignItems:'center'
  },
  txts:{
    marginTop:30,
    fontSize:20,
    fontFamily:'jl'
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
  ,titletop:{
    marginBottom:20,
    marginTop:40,
    borderRadius:12,
    backgroundColor:'#079992',
    fontFamily:'jl',
    flexDirection:'row',
    padding:10
  }
});
