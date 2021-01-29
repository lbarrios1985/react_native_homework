/**
 * This file is part of "Test work"
 * Copyright (c) 2021
 * All rights reserved
 *
 * @author Luis Barrios <nikeven@gmail.com>
 * @version 1.0
*/

import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    FlatList, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { 
  List, ListItem, Left, 
  Body, Right, Input, Container, 
  Toast, Header, Icon
} from 'native-base';
import { getContact } from '../../services/apiQuery'

/**
 * @function Home Screen to show all of people list data
 *
*/
const Home = (props) => {
    //Use States
    const [contacts, setContacts] = useState([])

    //Use Effects
    useEffect( async ()=>{
        let listContacts = await getContact()
        setContacts(listContacts)
        console.log('Cargo el Home ', listContacts);
    }, [])

    useEffect(()=>{
        console.log('actualizo el hook');
    }, [contacts])

    const Item = ({item, index, separators}) => {
        return (
            <TouchableOpacity 
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
            style={styles.item}
            onPress={()=> props.navigation.navigate('Contact', {
                itemId: 86
            })}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.number}>{item.phoneNumber}</Text>
            </TouchableOpacity>
        )
    };

    const ContacList = () => {
        return (
            <SafeAreaView  style={styles.container}>
                <FlatList
                    data={contacts}
                    renderItem={Item}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }

    return (
        <>
            <View style={styles.title}>
                <Text>Contacts List</Text>
            </View>
            <ContacList/>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    borderBottomColor : 'gray',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 22,
    padding: 5,
  },
  number: {
    fontSize: 14,
    padding: 5,
  }
});


export default Home