import React, { Component } from 'react';
import { StyleSheet, Animated } from 'react-native';

export default class AnimatedMarker extends Component {
    state={
        animation: new Animated.Value(1)
    };
    componentDidMount(){
        this.startAnimation()
    }
    startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing( this.state.animation, {
                    toValue:0.5,
                    duration:1000,
                    useNativeDriver: true
                }),
                Animated.timing(this.state.animation, {
                    toValue:1,
                    duration:1000,
                    useNativeDriver: true
                })
            ])
        ).start();
    }

  render() {
      const animatedStyles= {
          opacity: this.state.animation,
          transform: [{
              scale: this.state.animation
          }]
      };
    return (
      <Animated.View style={[styles.marker, animatedStyles]} />
    );
  }
}

const styles=StyleSheet.create({
    marker:{
        width:15,
        height:15,
        borderRadius:10,
        backgroundColor:'red'
    }
})
