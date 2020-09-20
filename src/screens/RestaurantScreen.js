import React, { Component } from 'react';
import { View, Text,  StyleSheet, Button } from 'react-native';
import Map from '../../components/Map/Restaurant';


export default function RestaurantScreen({ route, navigation }) {
    return (
        <Map />
    )
}

/*
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    }
})

*/