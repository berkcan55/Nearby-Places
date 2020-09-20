import * as React from 'react';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './screens/SignIn/index';
import SignUp from './screens/SignUp/index';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Sign Up" component={SignUp} />
      </Tab.Navigator>
    
  );
}