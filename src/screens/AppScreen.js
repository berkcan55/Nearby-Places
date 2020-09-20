import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import RestaurantScreen from './RestaurantScreen';
import HospitalScreen from './HospitalScreen';
import MuseumScreen from './MuseumScreen';
import BankScreen from './BankScreen';
import LodgingScreen from './LodgingScreen';
import Petrol_StationScreen from './Petrol_StationScreen';
import PharmacyScreen from './PharmacyScreen';
import PoliceScreen from './PoliceScreen';


const Stack = createStackNavigator();

export default function MyNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ HomeScreen } options={{ title: 'HOME', headerStyle:{backgroundColor:'#d10000',}, headerTintColor:'white', headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}} />
            <Stack.Screen name="Restautant" component={RestaurantScreen} options={{title:'Restaurants', headerStyle:{backgroundColor:'orange'},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}} />
            <Stack.Screen name="Hospital" component={HospitalScreen} options={{title:'Hospitals', headerStyle:{backgroundColor:'green'},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}} />
            <Stack.Screen name="Museum" component={MuseumScreen} options={{title:'Museums', headerStyle:{backgroundColor:'#026583'},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}} />
            <Stack.Screen name="Bank" component={BankScreen} options={{title:'Banks', headerStyle:{backgroundColor:'green'},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}} />
            <Stack.Screen name="Lodging" component={LodgingScreen} options={{title:'Lodging', headerStyle:{backgroundColor:'#e467a7'},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}} />
            <Stack.Screen name="Petrol_Station" component={Petrol_StationScreen} options={{title:'Petrol Station', headerStyle:{backgroundColor:'#570101'},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}} />
            <Stack.Screen name="Pharmacy" component={PharmacyScreen} options={{title:'Pharmacy', headerStyle:{backgroundColor:'#6600CC'},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}} />
            <Stack.Screen name="Police" component={PoliceScreen} options={{title:'Police', headerStyle:{backgroundColor:'#0f01ff'},headerTintColor:'white', headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}} />
            
        </Stack.Navigator>
    )
}