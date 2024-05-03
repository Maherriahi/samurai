import {createSlice,} from '@reduxjs/toolkit'

const NavSlice=createSlice({
    name:"NavSlice",
    initialState:{Nav:false},
    reducers:{
        NavVar:(state,action)=>{
       state.Nav=action.payload
       console.log('Etat NavBar',action.payload)
        }
    }
})

export const {NavVar}=NavSlice.actions
export default NavSlice.reducer