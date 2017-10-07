
import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { AddPatient, ViewPatient, Home, Login, Signup } from '../components';
import { ScrollView, } from 'react-native'


const DrawerNav = DrawerNavigator({
    Dashboard: { screen: Home },
    LOGOUT: { screen: Login },
    AddPatientScreen: { screen: AddPatient },
    ViewPatientScreen: { screen: ViewPatient }

},
    {
        contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
        contentOptions: {
            activeTintColor: '#FF69B4',
            style: {
                flex: 1,
                paddingTop: 15,
                width: 150
            },

        },
    }

);
const Navigations = StackNavigator({
    App: { screen: DrawerNav },
    LoginScreen: { screen: Login },
    SignupScreen: { screen: Signup },
    AddPatientScreen: { screen: AddPatient },
    ViewPatientScreen: { screen: ViewPatient }
},
    {
        headerMode: 'screen',
        initialRouteName: 'LoginScreen',
    }
);

export default Navigations;