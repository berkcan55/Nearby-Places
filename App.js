import React, { Component } from 'react';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Router';
import MyNavigation from './src/screens/AppScreen';
import { View, Spinner,Button, Text } from 'native-base';
import { Alert } from 'react-native';

export default class App extends Component {
  state={ loggedIn:null};
  UNSAFE_componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyAoG7ZBefw6HLuSZ-GORbn7YwYOIM7F6dw",
        authDomain: "nearby-3b18e.firebaseapp.com",
        databaseURL: "https://nearby-3b18e.firebaseio.com",
        projectId: "nearby-3b18e",
        storageBucket: "nearby-3b18e.appspot.com",
        messagingSenderId: "921621467894",
        appId: "1:921621467894:web:a563337bbf026b2d4252d7",
        measurementId: "G-2Q3Q0Y02ZE"
      });
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          if(user.emailVerified==true){
            console.log(user.emailVerified);
            this.setState({loggedIn:true})
          }else{
            console.log('Run error');
            Alert.alert(
              'Message',
              'Check Your Email !',
              [
                {text:'Ok', onPress: () => null}
              ]
            )
            console.log(user.emailVerified);
            this.setState({loggedIn:false})
          }
        }else{
          this.setState({loggedIn:false})
        }
      })
  }
  clickLogout(){
    firebase.auth().signOut();
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
        return (
            <MyNavigation />
        );
      case false:
        return(
          <Router />
        )
      default:
        return(
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:25}}>LOADING</Text>
            <Spinner size='large' color='black'/>
          </View>
        )    
    }
  }



  render() {
    return (
      <NavigationContainer>
        {this.renderContent()}
      </NavigationContainer>
    );
  }
}
