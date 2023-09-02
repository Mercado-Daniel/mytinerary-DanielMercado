import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const get_itineraries = createAsyncThunk('get_itineraries', async(obj) => {

    try {
        const response = await axios.get(`http://localhost:7000/api/itineraries/by-city/${obj.id}`)
        console.log(response.data.itineraries)
        return {
            itineraries: response.data.itineraries
            
        }
    } catch (error) {
        return {
            itineraries: []
        }
    }
})