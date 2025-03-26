import { configureStore, createSlice, } from "@reduxjs/toolkit";

const initialState={
    articles:[],
    loading:false,
};

const newSlice=createSlice({
    name:"news",
    initialState,
    reducers:{
        setLoading:(state)=>{
            state.loading=true;
        },
        setNews:(state,action)=>{
            state.loading=false;
            state.articles=action.payload;
        },
    },
});

export const {setNews,setLoading}=newSlice.actions;

export const store=configureStore({
    reducer:{news:newSlice.reducer},
});