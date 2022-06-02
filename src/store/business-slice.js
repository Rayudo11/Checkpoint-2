import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 businesses: []
}

const businessSlice = createSlice({
    name: 'businessSlice',
    initialState, 
    reducers: {
        
        fetchBusinesses(state, action){
            state.businesses = action.payload
        },

        addBusiness(state,action){
            let id = state.businesses.length+1
            action.payload.Id = id
            state.businesses = [...state.businesses,action.payload]
        },

        removeBusiness(state,action){
            let id = action.payload
            console.log(action.payload, 'action payload')
          let foundIndex = state.businesses.findIndex(business => business.Id == id)
          console.log(foundIndex)
          state.businesses.splice(foundIndex, 1)
        }
    }
})

export const businessActions = businessSlice.actions

export default businessSlice