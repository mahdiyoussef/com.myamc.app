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
const screens={
    seConnecter:{
        screen:login
        ,navigationOptions: {
            header: null,
          }
    },
    Senregistrer:{
        screen: Registre
        ,navigationOptions: {
            header: null,
          }
    },
    MyAMC:{
        screen: profiler
        ,navigationOptions: {
            header: null,
          }
    },
    MonCompte:{
        screen:profilec
        ,navigationOptions: {
            header: null,
          }
    },
    Navigation:{
        screen:navbutton
        ,navigationOptions: {
            header:null,
          }
    },
    
    MesDossiers:{
        screen:dossiers
        ,navigationOptions: {
            header: null,
          }
    },
    MesDemandes:{
        screen:demandes
        ,navigationOptions: {
            header: null,
          }
    },
    Details:{
        screen:detailsdossier
        ,navigationOptions: {
            header: null,
          }
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);