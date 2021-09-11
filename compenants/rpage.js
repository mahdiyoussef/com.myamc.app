import Expo from 'expo';
import React,{useState} from 'react';
import { Component } from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking, ScrollView,FlatList,Alert} from 'react-native';
import {StackNavigator,navigation} from 'react-navigation';
import 'react-native-gesture-handler';
import { render } from 'react-dom';
import profilec from './profile';
import navbutton from './navbutton';
import * as Font from 'expo-font';
import firebase from 'firebase';
export default class profiler extends Component{
    constructor(props){
        super(props);
        this.state={ 
        list:[],
        ls:[]
        
        } }
        componentDidMount(){
            const dossiers=   firebase.database().ref('/dossiermedicales').on('value', (snapshot) =>{
                    var li = []
                    snapshot.forEach((dossier)=>{
                      if(dossier.val().id===this.props.navigation.getParam('id')){
                    li.push(dossier.val())
                    }
                  })
                 this.setState({list:li})
                });
                const demandes=firebase.database().ref('/demandedeclient').on('value', (snapshot) =>{
                    var lis = []
                    snapshot.forEach((demande)=>{
                      if(demande.val().id===this.props.navigation.getParam('id')){
                    lis.push(demande.val())
                    }
                  })
                 this.setState({ls:lis})
                }) 
            
         }
    render(){
        Font.loadAsync({
            'qeury': require('../assets/fonts/query.ttf'),
            'jl':require('../assets/fonts/JosefinSans-Regular.ttf')

        })
    
    
    
    return(

        <View>
            <View style={styles.nav}>
                <Image source={require('../images/MyAMCHorizontal.png')}/>
                
            </View>
            <View>
            <View>
               <Text style={styles.files}><Image source={require('../images/dossier.png')}/>   Mes Dossiers Medicales</Text>
               <FlatList style={styles.flatg}
                    data={this.state.list.reverse()}
                    keyExtractor={(item)=>item.key}
                    renderItem={({item})=>{
                        return(<TouchableOpacity onPress={()=>this.props.navigation.navigate('Details',item)}>
                        <View style={styles.flatl}><Image source={require('../images/dossier.png')}/>
                        <Text style={{fontFamily:'jl',color:'white',fontSize:25,}}>N° Dossier:{item.nd}{'\n'}Date de Consultation:{item.jourc}/{item.moisc}/{item.annec}{'\n'}Status:{item.motif}{'\n'}{'<<< Appuyer pour voir les details >>>'}</Text></View>
                        </TouchableOpacity>)
             }}/>
             <Text style={styles.ttl}>Nombre Total des Dossiers:{this.state.list.length}
             </Text>
             <View style={styles.dmnd}>
                 <Image style={{width:40,height:40}} source={require('../images/chat.png')}/>
                 <Text style={{fontSize:30,color:'white',fontFamily:'jl',marginLeft:10}}>Mes Demandes</Text>
                 
             </View>
             <View>
             <FlatList style={{height:200}}
                    data={this.state.ls.reverse()}
                    keyExtractor={(item)=>item.key}
                    renderItem={({item})=>{
                        return(<TouchableOpacity >
                        <View style={styles.flatl}><Image source={require('../images/attacher.png')}/>
                        <Text style={{fontFamily:'jl',color:'white',fontSize:25,}}>N° Demande:{item.nd}{'\n'}Date de depot:{item.jourd}/{item.moisd}/{item.anned}{'\n'}Objet:{item.objet}{'\n'}</Text></View>
                        </TouchableOpacity>)
             }}/>
             </View>
             <Text style={styles.ttl}>Nombre Total des Demandes:{this.state.ls.length}
             </Text>
            </View>
            </View>
            <View style={{alignItems:'center',marginTop:10}}><View style={styles.navigationbar}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyAMC',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/nav/ds.png')}/>
                    <Text style={{fontFamily:'jl'}}>Dashboard</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Navigation',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/nav/menu.png')}/>
                    <Text style={{fontFamily:'jl'}}>Menu</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MesDossiers',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/nav/dossiers.png')}/>
                    <Text style={{fontFamily:'jl'}}>Mes Dossiers</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MesDemandes',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/nav/verifier.png')}/>
                    <Text style={{fontFamily:'jl'}}>Mes Demandes</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MonCompte',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/nav/utilisateur-de-profil.png')}/>
                    <Text style={{fontFamily:'jl'}}>Profile</Text>
                </View>
                </TouchableOpacity>
            </View></View>
        </View>
    )
       
}
    }
   

const styles=StyleSheet.create({
    nav:{
        alignItems:'center',
        marginTop:35,
        borderRadius:14,
        backgroundColor:'#78e08f'
    },
    profile:{
        marginLeft:40
    },
    topt:{
        fontSize:60
        ,color:'white',
        marginLeft:40
        
    }
    ,files:{
        
        fontSize:30
        ,borderRadius:10
        ,marginTop:25,
        backgroundColor:'#f1c40f'
        ,padding:6,
        margin:5,
        fontFamily:'jl',
        color:'white'
    }
    ,flatl:{
    
    
        paddingBottom:20,
        borderRadius:12,
        backgroundColor:'#9980FA',
        paddingLeft:5,
        flexDirection:'row',
        marginVertical:8,
        marginHorizontal:8,
        alignItems:'center',
        

      }
      ,flatg:{
          height:200
      },
      ttl:{
        fontSize:30
        ,
        borderRadius:10
        ,marginTop:10,
        backgroundColor:'#40739e'
        ,padding:6,
        margin:5,
        fontFamily:'jl',
        color:'white'
      },
      dmnd:{
        borderRadius:10
        ,marginTop:10,
        backgroundColor:'#38ada9'
        ,padding:6,
        margin:5,
        flexDirection:'row'
      }
      ,navigationbar:{
          flexDirection:'row',
          borderRadius:10,
          backgroundColor:'#ecf0f1'
      }
      ,btn:{
          alignItems:'center',
          marginRight:10
      }
})
