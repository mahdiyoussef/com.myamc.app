import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import login from '../compenants/login'
import Registre from "../compenants/registration";
import profiler from "../compenants/rpage";
import profilec from "../compenants/profile";
import navbutton from "../compenants/navbutton";
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
    }
    
    
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);