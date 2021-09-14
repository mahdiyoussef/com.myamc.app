import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import login from '../compenants/login'
import Registre from "../compenants/registration";
import profiler from "../compenants/rpage";
import profilec from "../compenants/profile";
import navbutton from "../compenants/navbutton";
import dossiers from "../compenants/dossiers";
import demandes from "../compenants/demande";
import detailsdossier from "../compenants/detailsdossier";
import optionschange from "../compenants/changeoption";
import changerNpassowrd from "../compenants/changepassword";
import changerNphone from "../compenants/changePhonenumber";
import changerNrib from "../compenants/changerib";

const screens={
    
    seConnecter:{
        screen:login
        ,navigationOptions: {
            headerShown:false,
        }
    },
    Senregistrer:{
        screen: Registre
        ,navigationOptions: {
            headerShown:false,
          }
    },
    MyAMC:{
        screen: profiler
        ,navigationOptions: {
            headerShown:false,
          }
    },
    MonCompte:{
        screen:profilec
        ,navigationOptions: {
            headerShown:false,
          }
    },
    Navigation:{
        screen:navbutton
        ,navigationOptions: {
            headerShown:false,
          }
    },
    
    MesDossiers:{
        screen:dossiers
        ,navigationOptions: {
            headerShown:false,
          }
    },
    MesDemandes:{
        screen:demandes
        ,navigationOptions: {
            headerShown:false,
          }
    },
    Details:{
        screen:detailsdossier
        ,navigationOptions: {
            headerShown:false,
          }
    },
    change:{
        screen:optionschange,
        navigationOptions:{
            headerShown:false,
        }
    },
    changerNpassword:{
        screen:changerNpassowrd
        ,navigationOptions:{
            headerShown:false
        }
    },
    changerNphone:{
        screen:changerNphone
        ,navigationOptions:{
            headerShown:false
        }
    },
    changerNrib:{
        screen:changerNrib
        ,navigationOptions:{
            headerShown:false
        }
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);