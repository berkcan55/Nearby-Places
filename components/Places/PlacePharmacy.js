import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PlacesItemPharmacy from './PlacesItemPharmacy'
export default class PlacePharmacy extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            data={this.props.places}
            keyExtractor={(item, key) => key.toString()}
            renderItem={({ item }) => <PlacesItemPharmacy map={this.props.map} item={item}/>}
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