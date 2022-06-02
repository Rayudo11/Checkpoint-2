
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        username:'',
        password:''
    },

    online:false

}

const userSlice= createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        login(state, action){
            state.user.username= action.payload.username
            state.user.password= action.payload.password
            state.online=true
        },
        logout(state, action){
            state.user.username= ''
            state.user.password= ''
            state.online=false
        }

    }
})

export const userActions= userSlice.actions
export default userSlice