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
/*import DocumentPicker from 'react-native-document-picker';*/



export default function uploaddoc({navigation}){
    /*async function choosefile(){
    try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.pdf],
            })
            console.log(
              res.uri,
              res.type, // mime type
              res.name,
              res.size,
            )
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err
            
          }}
    }*/
    Font.loadAsync({
        'query': require('../assets/fonts/query.ttf'),
        'jl':require('../assets/fonts/JosefinSans-Regular.ttf')
    
    })
    return(<View>
        <View style={{marginHorizontal:5,marginTop:8}}>
        <Text style={styles.addfiletitle}><Image source={require('../images/add-file.png')}/>Envoyer un dossier</Text>
        </View>
        <Text style={styles.title1}>Envoyer Vous Dossier Medicales Avec Toutes Facilité</Text>
        <TextInput placeholder="Numero de Dossier" style={styles.inpt}/>
        <TextInput placeholder="date de Consultation Ex: 21-08-2021" style={styles.inpt}/>
        <Text style={styles.title1}>Si le personne malade est Votre femme/homme Tapez 'C1',si votre fils/fille Tapez son Numero
        Ex:02</Text>
        <TextInput placeholder="Personne Malade" style={styles.inpt}/>
        <Text style={styles.title1}>scannez votre dossier sous form .pdf</Text>
        <TouchableOpacity>
            <Text style={styles.import}><Image source={require('../images/plus.png')}/>{' '}Choisir le dossier pdf</Text>
        </TouchableOpacity>
    </View>)
}
const styles=StyleSheet.create({
    addfiletitle:{
      fontSize:45,
      color:'white',
      paddingBottom:20,
      borderRadius:12,
      backgroundColor:'#9980FA',
      paddingLeft:5,
      fontFamily:'jl'
      
    },
    title1:{
        fontSize:25,
        color:'white',
        paddingBottom:20,
        borderRadius:12,
        backgroundColor:'#C4E538',
        paddingLeft:5,
        fontFamily:'jl',
        marginHorizontal:5,marginTop:8,
        textAlign:'center'
    },
    inpt:{
        fontSize:25,
        color:'white',
        paddingBottom:20,
        borderRadius:12,
        backgroundColor:'#38ada9',
        paddingLeft:5,
        fontFamily:'jl',
        marginHorizontal:5,marginTop:8,
        textAlign:'center'
    },
    import:{
        fontSize:25,
        color:'white',
        paddingBottom:20,
        borderRadius:12,
        backgroundColor:'#60a3bc',
        paddingLeft:5,
        fontFamily:'jl',
        marginHorizontal:5,marginTop:8,
        textAlign:'center'
    }
  })