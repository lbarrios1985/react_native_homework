import { createStore } from 'redux'
import rootReducer from './reducers'
let stateInitial = {
  contacts:[],
  alert: {
    message:"",
    active:false
  }
};

const store = createStore(rootReducer, stateInitial)

export default store