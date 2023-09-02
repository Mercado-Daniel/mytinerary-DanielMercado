import {configureStore} from '@reduxjs/toolkit'
//import { useReducer } from './reducers/UseReducer'
import cityReducer from './reducers/cityReducers'
import itineraryReducer from './reducers/itineraryReducer'

export const store = configureStore({
    reducer:{
        //userReducer,
        cityReducer,
        itineraryReducer
    }
})
