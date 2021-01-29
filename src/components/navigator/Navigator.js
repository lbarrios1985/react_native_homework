import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/home/Home'
import Contact from '../../screens/contact/Contact'

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
