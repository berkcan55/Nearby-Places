import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import {API_ENDPOINT, API_KEY} from '../../constants';
import MapView, { Marker } from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');
import PlacePetrol_Station from '../Places/PlacePetrol_Station';
import AnimatedMarker from '../AnimatedMarker';

export default class Petrol_Station extends Component {
  state = {
    region: {
      latitude: 41.0087,
      longitude: 29.0173,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    places: [],
    fetching: false
  };

  async componentDidMount() {
    try{
      const { coords: { latitude, longitude }} = await this.getCurrentPosition();
      this.setState({
          region: {
              ...this.state.region,
              latitude,
              longitude
          },
          fetching:true
      });
      const { data: { results }} = await axios.get(`${API_ENDPOINT}/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=gas_station&key=${API_KEY}`)
      this.setState({
          places:results,
          fetching:false
      })
      console.log(this.state)
    }catch (e) {
      this.setState({
        fetching:false
      })
      alert(e)
    }
  }

  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        () => reject(),
        {
          timeout: 5000,
          maximumAge: 1000,
          enableHighAccuracy:false
        }
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          region={this.state.region}
          ref={ref => this.map=ref }
        >
          {
            this.state.places.map((place, key) => {
              const { geometry: {location: { lat, lng }}} =place;
              return(
                <Marker
                  key={key}
                  coordinate={{
                    latitude: lat,
                    longitude: lng
                  }}
                  title={place.name}
                >
                  <AnimatedMarker/>
                </Marker>
              )
            })
          }
        </MapView>
        <View style={styles.placesContainer}>
          {
            this.state.fetching ? <Text style={styles.loading}>Loading</Text>:<PlacePetrol_Station map={this.map} places={this.state.places} />
          }
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1
  },
  placesContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height:140,
    alignItems:'center',
    justifyContent:'center'
  },
  loading: {
    padding:10,
    backgroundColor:'#f1f1f1',
    fontSize:13,
    color:'#333'
  }
});
