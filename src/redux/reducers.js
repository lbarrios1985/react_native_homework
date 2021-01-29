/**
 * This file is part of "Test work"
 * Copyright (c) 2021
 * All rights reserved
 *
 * @author Luis Barrios <nikeven@gmail.com>
 * @version 1.0
 */


/**
 * Reducers used for change global values
 * @global stateInitial - Variable used for global state
 */

let stateInitial = {
  contacts:[],
  alert: {
    message:"",
    active:false
  }
};

/**
 * Permite definir el tipo de acción que queremos ejecutar hacia el estado global
 * @param {*} state - Estado inicial
 * @param {*} action - Acción a ejecutar desde dispachs
 */
function reducers(state = stateInitial, action) {
  switch (action.type) {
    // Section Setters
    case 'SET_CONTACTS': 
      return {
        ...state, 
        contacts : action.payload,
        favorite : undefined
      };
    case 'SET_FAVORITE': 
      // If add a favorite update contacts for have standard favorite of first value y the element is container in the old position
      return {
        ...state,
        contacts: [action.payload, ...state.contacts], 
        favorite : action.payload,
      };
    default: {
      return state;
    }
  }
}

export default reducers;
