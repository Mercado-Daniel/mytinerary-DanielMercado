import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/userReducers'
import cityReducer from './reducers/cityReducers'
import itineraryReducer from './reducers/itineraryReducer'

export const store = configureStore({
    reducer:{
        userReducer,
        cityReducer,
        itineraryReducer
    }
})
