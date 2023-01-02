import { createReducer } from "@reduxjs/toolkit";

import { POSTDATA,POSTDATAFAIL } from "../action/Postaction";


const initialState={
    data:[],
    error:null,
    loading:false
};

const postreducer= createReducer(initialState,{

    [POSTDATA]:(state,action)=>{
        state.data=action.payload;

    },
    [POSTDATAFAIL]:(state,action)=>{
        state.error=action.payload
    }






});
export default postreducer;