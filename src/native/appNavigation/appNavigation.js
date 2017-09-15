
import { StackNavigator } from 'react-navigation';
import {AddPatient,ViewPatient,Home} from '../components';

const Navigations = StackNavigator({
    App: { screen: Home },
    AddPatientScreen:{screen:AddPatient},
    ViewPatientScreen:{screen:ViewPatient}  
},
    {
        headerMode: 'screen',
        initialRouteName: 'App',
    }
);

export default Navigations;