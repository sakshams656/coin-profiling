import { configureStore, createSlice, } from "@reduxjs/toolkit";

const initialState={
    articles:[],
    loading:false,
};

const newSlice=createSlice({
    name:"blogs",
    initialState,
    reducers:{
        setLoading:(state)=>{
            state.loading=true;
        },
        setBlogs:(state,action)=>{
            state.loading=false;
            state.articles=action.payload;
        },
    },
});

export const {setBlogs,setLoading}=newSlice.actions;

export const store=configureStore({
    reducer:{blogs:newSlice.reducer},
});