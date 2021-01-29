/**
 * This file is part of "Test work"
 * Copyright (c) 2021
 * All rights reserved
 *
 * @author Luis Barrios <nikeven@gmail.com>
 * @version 1.0
*/

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { additionalInfo, getContactPk } from '../../services/apiQuery'
import {
    ScrollView,
    View,
    Text,
    Button
} from 'react-native';
import { Toast } from 'native-base';

/**
 * @function Contact Screen to display a single people data
 * @returns Array response
*/
const Contact = (props) => {
    const dispatch = useDispatch();
    let [job,setJob] = useState('')
    let [contact,setContact] = useState('')
    const stateContact = useSelector(state => state.contacts);

    const checkExtra = async () => {
      try {
        let mainContact = await getContactPk(stateContact,props.route.params.itemId)
        setContact(mainContact)
        let additional = await additionalInfo()
        setJob(additional)
      } catch (error) {
        Toast.show({
          text: error,
          buttonText: 'Okay',
          type: 'danger',
          duration : 3000
        })
        dispatch({type: 'DELETE_CONTACT', payload: props.route.params.itemId });
        props.navigation.navigate('Home')
      }
    }

    useEffect(() => {
      if(props.route.params.itemId !== undefined && props.route.params.itemId !== null){
        checkExtra()
      }
    },[props.route.params.itemId])
  
    return (
        <>
            <Text>Name { contact.name }</Text>
            <Text>Phone { contact.phone }</Text>
            <Text>Job title { job.jobTitle }</Text>
            
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