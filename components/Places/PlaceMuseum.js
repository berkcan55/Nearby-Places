import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PlacesItemMuseum from './PlacesItemMuseum'
export default class PlaceMuseum extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            data={this.props.places}
            keyExtractor={(item, key) => key.toString()}
            renderItem={({ item }) => <PlacesItemMuseum map={this.props.map} item={item}/>}
            horizontal={true}
            ItemSeparatorComponent={() => <View style={{ marginRight: 10 }}/>}
            showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:140,
        padding:10,
        //backgroundColor: '#f1f1f1'
    }
})