import faker from 'faker'

/**
 * This file is part of "Test work"
 * Copyright (c) 2021
 * All rights reserved
 *
 * @author Luis Barrios <nikeven@gmail.com>
 * @version 1.0
*/

/**
 * @function getContact its used for generate Contact list
 * @returns Array response
*/
export const getContact = async () => {
  let contacts = []
  // loop for generate 200 records
  for(let i = 0;i<200;i++){
    contacts.push({
      name: `${faker.name.firstName} ${faker.name.lastName}`,
      phoneNumber: faker.phone.phoneNumber
    })
  }
  // Sort alphabetic
  return contacts.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
}