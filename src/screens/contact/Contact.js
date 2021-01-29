/**
 * This file is part of "Test work"
 * Copyright (c) 2021
 * All rights reserved
 *
 * @author Luis Barrios <nikeven@gmail.com>
 * @version 1.0
*/

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

/**
 * @function Contact Screen to display a single people data
 * @returns Array response
*/
const Contact = (props) => {
    return (
        <>
            <Text>Contact Screen {props.route.params.itemId}</Text>
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