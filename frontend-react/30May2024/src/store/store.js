import { configureStore } from "@reduxjs/toolkit"
import counter from "./counterSlice"


const store = configureStore({
    reducer: {
        counter
    }
})

export default store