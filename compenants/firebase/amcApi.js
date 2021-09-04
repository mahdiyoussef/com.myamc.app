import firebase from "firebase";
import { Alert } from "react-native";
export default function AddSclient(id,cin,name,prenom,cadreSur,rib,ntel){
    firebase.firestore().collection("sclient").add({
        CIN:cin,
        cadreSur:cadreSur,
        id:id,
        name:name,
        ntel:ntel,
        prenom:prenom,
        rib:rib,
        
        
    }).then((data)=> addComplete(data)).catch((error)=>Alert.alert('error'))
}
/*export async function getSclient(thing){
    var clientinfo=[]
    var snapshot=await firebase.firestore().collection('sclient/${thing}'
    ).get()

    snapshot.forEach((doc)=>{
        clientinfo.push(doc.data());
    });
    return clientinfo;
}*/