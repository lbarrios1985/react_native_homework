import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

const Contact = (props) => {
    return (
        <>
            <Text>Contact Screen</Text>
            <Button
                onPress={()=> props.navigation.navigate('Home')}
                title="Go Home"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </>
    )
}

export default Contact