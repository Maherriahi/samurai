import {configureStore} from '@reduxjs/toolkit'
import NavSlice from './redux-slice'
export const store=configureStore({
    reducer:{
        Nav:NavSlice
    }
})