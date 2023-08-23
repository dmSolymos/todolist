import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isItOpen: false,
}

const modalEditSlice = createSlice({
    name:'modaledit',
    initialState,
    reducers:{
        openEditModal:(state,action)=>{
            state.isItOpen = true;
        },
        closeEditModal:(state,action)=>{
            state.isItOpen = false;
        }
    }
})

export default modalEditSlice.reducer;
export const {openEditModal,closeEditModal} = modalEditSlice.actions;