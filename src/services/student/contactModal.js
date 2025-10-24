import { createSlice } from "@reduxjs/toolkit"


const initialState={
    openModal:false
}


export const contactModalSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        openContactModal:(state,action)=>{
            state.openModal=action.payload
        }
    }
})

export const {openContactModal} = contactModalSlice.actions;
export default contactModalSlice.reducer;