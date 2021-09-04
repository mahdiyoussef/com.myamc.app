import React,{useState,useEffect,Component} from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking, Alert, TextPropTypes} from 'react-native';
import 'react-native-gesture-handler';
import {StackNavigator} from 'react-navigation';
import firebase from 'firebase';
import { render } from 'react-dom';
import * as Font from 'expo-font';
import { usrshow } from './login';
import login from './login';

export default function profilec({navigation}){
    
     useEffect(() => {
        printUsers();
        console.log(designers);
    }, []);
    Font.loadAsync({
        'qeury': require('../assets/fonts/query.ttf'),
        'jl':require('../assets/fonts/JosefinSans-Regular.ttf')

    })
// Get a list of sers from your database
    
    
    
    /*const userinfo=firebase.firestore().collection('sclient/001').get();*/
    const [designers, setDesigners] = useState([]);
    
    console.log(navigation.getParam('id')+'sucess')
    function printUsers() {
        var users = firebase.database().ref('/sclient');
        users.on('value', (snapshot) => {
            snapshot.forEach((snap) => {
                const userObject = snap.val();
                const role = userObject['id'];
                console.log(role);
                if (role === navigation.getParam('id')) {
                    const newDesigners = [...designers, userObject];
                    setDesigners(newDesigners);
                }
            });
        });
    }

   
    
    return(
        
        <View style={styles.con}>
            <View style={styles.imgp}>
            <Image   source={require('../images/teamwork.png')}/></View>
            <View><Text style={styles.pinfo}>INFORMATION PERSONNELLES</Text></View>
            <TouchableOpacity>
                <View style={styles.chngb}>
                    <Image source={require('../images/icons8-modifier-le-compte-32.png')   } tintColor='white' 
                      /><Text style={{fontSize:20,color:'white',fontFamily:'jl'}}>Modifier Vous Information Personnelles</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.info}>
                <View>
                {designers.map((designerObject) => {
                    return <Text style={styles.infou}><Image  source={require('../images/i1.png')}/><Text style={styles.names}>{'  '}{designerObject.name} {designerObject.prenom}</Text>{'\n'}{'\n'}<Image  source={require('../images/i2.png')}/>{'  '}{designerObject.cadreSur}{'\n'}<Image  source={require('../images/i3.png')}/>{'  '}{designerObject.rib}{'\n'}<Image  source={require('../images/i4.png')}/>{'  '}{designerObject.CIN}{'\n'}<Image  source={require('../images/i5.png')}/>{'  '}{designerObject.ntel}</Text>
                    
                })}
                </View>
                
            </View>
        </View>
    );

}
const styles=StyleSheet.create({
    imgp:{
        position:'absolute',
        top:8,
        right:8,
    },
    name:{
        fontSize:20,
        textAlign:'center',
        margin:15
        ,fontFamily:'jl'
        
    }
    ,info:{
        borderRadius:14,
        backgroundColor:'#f5f6fa',
        marginHorizontal:15,
        alignItems:'center',
        paddingBottom:400,
        marginTop:50,
        fontFamily:'jl'
    },
    con:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'#9980FA',
        fontFamily:'jl'
    }
    ,infou:{
        fontSize:30,
        fontFamily:'jl'
    },
    names:{
        fontSize:40,
        fontFamily:'jl'
    },
    pinfo:{
        color:'white',
        fontSize:40,
        margin:4,
        fontFamily:'jl'
    },
    chngb:{
        marginTop:10,
        alignItems:'center',
        borderRadius:10,
        borderWidth:2,
        borderColor:'white',
        marginHorizontal:20,
        fontFamily:'jl'
    }
})