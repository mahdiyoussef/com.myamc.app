import Expo from 'expo';
import React,{useState} from 'react';
import { Component } from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,AppRegistry,Linking, ScrollView,FlatList,Alert} from 'react-native';
import {StackNavigator,navigation} from 'react-navigation';
import 'react-native-gesture-handler';
import { render } from 'react-dom';
import * as Font from 'expo-font';
import firebase from 'firebase';
function statusIcon(status){
    if(status==="RVAC" || status==="RVCO" || status==="Accepter" ){
        return(<View><Image source={require('../images/tick-mark.png')}/></View>)
    }
    else if(status==="en cours" || status==="ov"){
        return(<View><Image source={require('../images/prg.png')}/></View>)
    }
    else{
        return(<View><Image source={require('../images/warning.png')}/></View>)
    }
}
export default class profiler extends Component{
    constructor(props){
        super(props);
        this.state={ 
        list:[],
        ls:[],
        rvac:0,
        bf:0
        
        } }
        async componentDidMount(){
            const dossiers=  await firebase.database().ref('/dossiermedicales').on('value', (snapshot) =>{
                    var li = []
                    var bfs=0;
                    var  rvacs=0;
                    snapshot.forEach((dossier)=>{
                      if(dossier.val().id===this.props.navigation.getParam('id')){
                          
                            li.push(dossier.val())
                            if(dossier.val().sort==="RVAC"){
                                rvacs+=1;
                                bfs+=parseInt(dossier.val().mntn);
                            }
                        }
                  })
                 this.setState({list:li.reverse()});
                 this.setState({rvac:rvacs})
                 this.setState({bf:bfs})
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
        const listd=this.state.list;
        
        return(
        

        <View>
            <View style={styles.nav}>
                <Image key='logosaham' source={require('../images/MyAMCHorizontal.png')}/>
                
            </View>
            <View style={{marginHorizontal:5,marginTop:20}} >
            <Text  style={styles.navway12}>{' '}<Image  source={require('../images/dashboard.png')} />{' '}Dashboard</Text>
        </View>
            <View>
            <View>
                <View style={styles.files} >
                    <Text  style={{fontFamily:'jl',color:'white',fontSize:30,marginBottom:15}}><Image source={require('../images/dossier.png')}/> Mes Dossiers Précédent </Text>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('MesDossiers',{id:this.props.navigation.getParam('id')})
                    }}><Text  style={{fontSize:20,marginLeft:20,fontFamily:'jl',marginTop:10}}>Voir Tout</Text></TouchableOpacity>
                    </View>
               <FlatList  style={styles.flatg}
                    data={listd.slice(0,2)}
                    keyExtractor={(item)=>item.key}
                    renderItem={({item})=>{
                        return(<TouchableOpacity key={item.id} onPress={()=>this.props.navigation.navigate('Details',item)}>
                        <View key={item.id} style={styles.flatl}>{statusIcon(item.sort)}
                        <Text style={{fontFamily:'jl',color:'white',fontSize:25,}}>N° Dossier:{item.nd}{'\n'}Date de Consultation:{item.jourc}/{item.moisc}/{item.annec}{'\n'}Status:{item.motif}{'\n'}{'<<< Appuyer pour voir les details >>>'}</Text></View>
                        </TouchableOpacity>)
             }}/>
             <View style={styles.ttl}>
             <Text  style={{fontFamily:'jl',
        color:'white',fontSize:20,textAlign:'center'}}>Total des Dossiers:{'\n'}{this.state.list.length}
             </Text>
             <Text style={{color:'white',textAlign:'center'}}>____________________________</Text>
             <Text  style={{fontFamily:'jl',
        color:'white',fontSize:20,textAlign:'center',marginLeft:10}}>Dossiers Accepté:{'\n'}{(this.state.rvac)/this.state.list.length*100}%</Text>
        <Text  style={{color:'white',textAlign:'center'}}>____________________________</Text>
        <Text style={{fontFamily:'jl',
        color:'white',fontSize:20,textAlign:'center'}}>Total des Benifites:{'\n'}{this.state.bf*(0.1)} DH
             </Text>
             <Text  style={{color:'white',textAlign:'center'}}>____________________________</Text>
             </View>
             
            </View>
            </View>
            <View style={{alignItems:'center',marginTop:10}}><View style={styles.navigationbar}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyAMC',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/navbar/dashboard.png')} />
                    <Text style={{fontFamily:'jl',color:'white'}}>Dashboard</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Navigation',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/navbar/menu.png')} />
                    <Text style={{fontFamily:'jl',color:'white'}}>Menu</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MesDossiers',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/navbar/dossier.png')} />
                    <Text style={{fontFamily:'jl',color:'white'}}>Mes Dossiers</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MesDemandes',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/navbar/bill.png')} />
                    <Text style={{fontFamily:'jl',color:'white'}}>Mes Demandes</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MonCompte',{id:this.props.navigation.getParam('id')})}>
                <View style={styles.btn}>
                    <Image source={require('../images/navbar/man.png')} 
                    />
                    <Text style={{fontFamily:'jl',color:'white'}}>Profile</Text>
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
        borderRadius:10
        ,marginTop:25,
        backgroundColor:'#f1c40f'
        ,padding:6,
        margin:5,
        flexDirection:'row'
        
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
          height:250
      },
      ttl:{
        fontSize:30
        ,
        borderRadius:10
        ,marginTop:10,
        backgroundColor:'#40739e'
        ,padding:6,
        margin:5,
        
        
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
          backgroundColor:'#16a085',
          padding:12
      }
      ,btn:{
          alignItems:'center',
          marginRight:10
      },
      navway12:{
          fontSize:50,
          color:'white',
          paddingBottom:10,
          borderRadius:12,
          backgroundColor:'#079992',
          fontFamily:'jl'
          
      }
})
