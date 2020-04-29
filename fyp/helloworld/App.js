//Author : Oisin Wilson (C00213826)
//Entry Point for Final Year Project

import * as React from 'react';
import AppNavigator from './components/AppNavigator';
import { createAppContainer } from 'react-navigation';

//import PushNotificationManager from './components/PushNotificationsManager'

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return (
      
         <AppContainer/>
     
    );
  }
}
