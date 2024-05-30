import { createSlice } from '@reduxjs/toolkit'

/*
user geoLocation - web API
initialState = {
    latitude:''
    longitude:''
}

reducers:{
    updateUserCurrentLocation{
        https://www.w3schools.com/html/html5_geolocation.asp
    }
    reset{

    }
}

*/
// reducers are pure functions
const initialState = 0
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {  // type = counter/increment
            return state = state + 1
        },
        decrement(state, action) { // type = counter/decrement
           return state = state - 1
        },
        reset(state, action) { // type = counter/reset
           return state = initialState
        }
    }
})


export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer