import React,{useState,useEffect} from 'react';
import { StyleSheet,ImageBackground,Text, View,TextInput,Button,TouchableOpacity,Image,Picker,Alert} from 'react-native';
import firebase from 'firebase';
import * as Font from 'expo-font';
/* Main function */
export default function Registre(){

    const addUser=()=>{
        firebase.firestore
        .collection("demandes")
        .doc()
        .add({
          images:payload.images,
          price: payload.price,
          tags: payload.tags
        });
    }
    Font.loadAsync({
        'query': require('../assets/fonts/query.ttf'),
        'jl':require('../assets/fonts/JosefinSans-Regular.ttf')
    
    })
    let msg1='Tapez votre Nom';
    let msg2='Tapez votre PreNom';
    let msg3='Tapez Votre CIN';
    let cp_Default="Fondation M6"
    let msg4='Tapez Votre RIB'
    let msg5='Tapez N° de Telephone'
    var arrcl=["Fondation M6","Fondation HII","Ministère De Habous","Groupe OCP"]
    const [selectedValue, setSelectedValue] = useState({cp_Default});
    const [cin,getcin]=useState('')
    const [name,getname]=useState('')
    const [prenom,getprenom]=useState('')
    const [rib,getrib]=useState('')
    const [ntel,getntel]=useState('');
    const [cd,getcd]=useState('');
    let cadre;
    const Push = () => {
        var RandomNumber = Math.floor(Math.random() * 10002) + 1 ;
        firebase.database().ref('demandesEnregistrement/'+RandomNumber).set({
          objet:"Demandes d'Enregistrement",
          namec : name,
          ncin:cin,
          nrib:rib,
          ntelp:ntel,
          cadreSur:cd,
          prenomc:prenom

        }).then(()=>{
            Alert.alert('Votre Enregistrement à succès');
          }).catch((error)=>{
            Alert.alert(error);
          });
          
      }
    return(
        
        <View style={styles.container}>
            <View style={styles.titletop}>
             <Image source={require('../images/log-in.png')}/><Text style={{fontFamily:'jl',fontSize:30,color:'white'}}>Remplire le formulaire{'\n'}complétement</Text>   
            </View>
            
            <TextInput value={name} onChangeText={(text) => getname(text)} placeholder={msg1} style={styles.inpn}/>
            <TextInput value={prenom} onChangeText={(text) => getprenom(text)} placeholder={msg2} style={styles.inpn}/>
            <TextInput value={cin} placeholder={msg3} style={styles.inpn} onChangeText={(text) => getcin(text)}/>
            <TextInput value={rib} onChangeText={(text) => getrib(text)} placeholder={msg4} style={styles.inpn}/>
            <TextInput value={ntel} onChangeText={(text) => getntel(text)} placeholder={msg5} style={styles.inpn}/>
            <TextInput value={cd} onChangeText={(text) => getcd(text)} placeholder={'Tapez votre fondation'} style={styles.inpn}/>
            
            <TouchableOpacity style={{
                borderRadius:6,backgroundColor:'white',alignItems:'center',marginTop:30,backgroundColor:'#3c6382',width:300,height:50
                }} onPress={Push}>
                <Text style={{color:'white',fontSize:25,textAlign:'center',width:270,fontFamily:'jl'}}><Image source={require('../images/contact.png')}/>{' '}
                   S'inscrire
                </Text>
            </TouchableOpacity>
            
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'100%'
    },
    inpn:{
        marginTop:30,
        fontSize:20,
        borderRadius:12,
        borderWidth:4,
        borderColor:'#82ccdd',
        /*paddingVertical:10,
        paddingHorizontal:90,*/
        width:300,
        height:50,
        textAlign:'center'
        
    },
    titletop:{
        marginBottom:20,
        marginTop:40,
        borderRadius:12,
        backgroundColor:'#079992',
        flexDirection:'row',
        padding:10
    }
});
