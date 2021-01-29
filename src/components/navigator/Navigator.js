/**
 * This file is part of "Test work"
 * Copyright (c) 2021
 * All rights reserved
 *
 * @author Luis Barrios <nikeven@gmail.com>
 * @version 1.0
*/

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/home/Home'
import Contact from '../../screens/contact/Contact'

/**
 * @function Navigator its used for show the screens of apps
 * @returns Component
*/
const Navigator = () => {
    const Stack = createStackNavigator();
    
    function nav() {
      return (
        <Stack.Navigator 
        //   options={{headerShown: false}}
          initialRouteName="Home"
          screenOptions={{
            gestureEnabled: true,
            headerTintColor: "#212322",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    }
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={nav} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigator
