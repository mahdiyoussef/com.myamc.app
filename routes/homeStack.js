import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import login from '../compenants/login'
import Registre from "../compenants/registration";
import profiler from "../compenants/rpage";
import profilec from "../compenants/profile";
import navbutton from "../compenants/navbutton";
import dossiers from "../compenants/dossiers";
import uploaddoc from "../compenants/uplaod";
const screens={
    
    seConnecter:{
        screen:login
    },
    Senregistrer:{
        screen: Registre
    },
    MyAMC:{
        screen: profiler
    },
    MonCompte:{
        screen:profilec
    },
    Navigation:{
        screen:navbutton
    },
    
    MesDossiers:{
        screen:dossiers
    },
    Envoyer:{
        screen:uploaddoc
    },
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);