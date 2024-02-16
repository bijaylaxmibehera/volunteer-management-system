import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    volunteers:[],
    status:'idle',
    error:null
};

export const fetchVolunteers= createAsyncThunk("volunteers/fetchVolunteers", async()=>{
    const response=await axios.get("https://00f2f813-ae16-475f-a9c4-96e475463e67-00-23sy3odetpv0i.pike.replit.dev/api/v1/volunteers");

    return response.data.volunteers;
});

export const volunteerSlice=createSlice({
    name:"volunteers",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchVolunteers.pending]:(state)=>{
            state.status="loading";
        },
        [fetchVolunteers.fulfilled]:(state,action)=>{
            state.status="success";
            state.volunteers=action.payload;
        },
        [fetchVolunteers.rejected]:(state,action)=>{
            state.status="error";
            state.error=action.error.message;
        }
    }
});

export default volunteerSlice.reducer;
