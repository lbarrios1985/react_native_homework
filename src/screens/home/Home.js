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

const Home = (props) => {
    return (
        <>
            <Text>Home Screen</Text>
            <Button
                onPress={()=> props.navigation.navigate('Contact')}
                title="Go Contact"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </>
    )
}

export default Home