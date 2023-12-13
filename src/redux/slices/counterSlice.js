
import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0, myname:'irfan', married:false}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state, action){

            state.value = state.value + 1

        },
        decrement(state, action){
            state.value = state.value - 1

        },
        changeName(state, action){
            state.myname = state.myname = 'SAYYED';
        }
    }

}) 

export default counterSlice.reducer;

export  const {increment, decrement, changeName} = counterSlice.actions