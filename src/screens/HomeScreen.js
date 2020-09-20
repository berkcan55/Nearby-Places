import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, Image} from 'react-native';
//import Image from 'react-native-scalable-image';

export default HomeScreen

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.buttond}>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Restautant')}>
                        <Image
                            source={require('../../assets/restaurant.jpg')}
                        />
                        <Text style={styles.text}>Restaurant</Text>
                        
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Lodging')}>
                        <Image
                            source={require('../../assets/hotel.jpg')}
                        />
                        <Text style={styles.text}>Hotel</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Bank')}>
                        <Image
                            source={require('../../assets/bank.jpg')}
                        />
                        <Text style={styles.text}>Bank</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button4} onPress={() => navigation.navigate('Petrol_Station')}>
                        <Image
                            source={require('../../assets/petrol_station.jpg')}
                        />
                        <Text style={styles.text}>Petrol Station</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttony}>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button5} onPress={() => navigation.navigate('Museum')}>
                        <Image

                            source={require('../../assets/museum.jpg')}
                        />
                        <Text style={styles.text}>Museum</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button6} onPress={() => navigation.navigate('Hospital')}>
                    <Image
                            source={require('../../assets/hospital.jpg')}
                        />
                        <Text style={styles.text}>Hospital</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button7} onPress={() => navigation.navigate('Pharmacy')}>
                        <Image
                            source={require('../../assets/pharmacy.jpg')}
                        />
                        <Text style={styles.text}>Pharmacy</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.button8} onPress={() => navigation.navigate('Police')}>
                        <Image
                            source={require('../../assets/police.jpg')}
                        />
                        <Text style={styles.text}>Police</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row'
    },
    buttond: {
        flex:1,
        flexDirection:'column'
    },
    buttony: {
        flex:1,
        flexDirection:'column'
    },
    button: {
        flex:2,
        justifyContent:'center',
    },
    button1:{
        flex:3,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    button2:{
        flex:3,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    button3:{
        flex:3,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    button4:{
        flex:3,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    button5:{
        flex:3,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    button6:{
        flex:3,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    button7:{
        flex:3,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    button8:{
        flex:3,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'black',
        position:'absolute',
        bottom:0
    }

})