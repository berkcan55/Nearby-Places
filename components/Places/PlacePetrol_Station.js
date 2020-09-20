import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PlaceItemPetrol_Station from './PlaceItemPetrol_Station'
export default class PlacePetrol_Station extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            data={this.props.places}
            keyExtractor={(item, key) => key.toString()}
            renderItem={({ item }) => <PlaceItemPetrol_Station map={this.props.map} item={item}/>}
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