
import {
  AppRegistry
} from 'react-native';

import Navigations from './src/native/appNavigation/appNavigation';
import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAIzeqH_Qxk9iJC-ARwgMjK-iUnVgMpn0w",
  authDomain: "boiler-plate-auth.firebaseapp.com",
  databaseURL: "https://boiler-plate-auth.firebaseio.com",
  projectId: "boiler-plate-auth",
  storageBucket: "boiler-plate-auth.appspot.com",
  messagingSenderId: "506638140028"
};
firebase.initializeApp(config);

AppRegistry.registerComponent('AheerDoctorApp', () => Navigations);
