/**
 * This file is part of "Test work"
 * Copyright (c) 2021
 * All rights reserved
 *
 * @author Luis Barrios <nikeven@gmail.com>
 * @version 1.0
 */

 import faker from 'faker'

/**
 * @function getContact its used for generate Contact list
 * @returns Array response
*/
export const getContact = async () => {
  let contacts = []
  // loop for generate 200 records
  for(let i = 0;i<200;i++){
    contacts.push({
      id:i+1,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      phoneNumber: faker.phone.phoneNumber()
    })
  }
  // Sort alphabetic
  return contacts.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
}

/**
 * @function getContactFilter its used for generate Contact list filtered
 * @param oldContact its the actual array for contacts
 * @param word its value for filter in the array
 * @returns String response
*/
export const getContactFilter = async (oldContact, word) => {
  // If word dont it s word then render oldContact else the filter 
  return typeof(word) !== 'string' ? oldContact : oldContact.filter(m => m.name.toLowerCase() === word.toLowerCase())
}

/**
 * @function getContactPk its used search contact
 * @param base its the actual array for contacts
 * @param pk its identification of contact for search
 * @returns Object response
*/
export const getContactPk = async (base, pk) => {
  let contact = base.find(m => m.pk === pk)
  if (contact !== undefined && contact !== null) {
    return contact
  } 
  else{
    throw "contact_not_found"
  }
}

/**
 * @function additionalInfo its used for generate Contact list
 * @returns Object response
*/
export const additionalInfo = async () => {
  if(Math.random() < 0.7){
    return { jobTitle: faker.name.jobTitle() }
  } 
  else {
    throw "contact_not_valid"
  }
}