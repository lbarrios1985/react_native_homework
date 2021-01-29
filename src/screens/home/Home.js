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
  Toast
} from 'native-base';
import { getContact } from '../../services/apiQuery'
import { useSelector, useDispatch } from 'react-redux';

/**
 * @function Home Screen to show all of people list data
 *
*/
const Home = (props) => {
    //Use States
    const [contacts, setContacts] = useState([])
    const stateContact = useSelector(state => state.contacts);
  const [firstTime,setFirstTime] = useState(false)
 
    let search = async () => {
      let listContacts = await getContact()
      setFirstTime(true)
      setContacts(listContacts)
    }
    //Use Effects
    useEffect(()=>{
      search()
    }, [])

    // useEffect(()=>{
    //   if(stateContact.length > 0 && !firstTime){
    //     setContacts(stateContact)
    //   }
    //   else{
    //     setFirstTime(false)
    //   }
    // }, [stateContact])

    const Item = ({item, index, separators}) => {
        return (
            <TouchableOpacity 
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
            style={styles.item}
            onPress={()=> props.navigation.navigate('Contact', {
                itemId: item.id
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