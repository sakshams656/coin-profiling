import {createStore} from "redux";

const initialState={
    articles:[]
}

const blogReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SET_ARTICLES":
            return {...state,articles:action.payload};
        default:
            return state;
    }
};

const store=createStore(blogReducer);

export default store;
