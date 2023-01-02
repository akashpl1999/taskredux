import { createReducer } from "@reduxjs/toolkit";

import { GETDATAAPIFAIL,GETDATAAPISUCCESS } from "../Action/Getaction";


const initialState={
    data:[],
    error:null,
    loading:false
}

const getreducer= createReducer(initialState,{

    [GETDATAAPISUCCESS]:(state,action)=>{
         state.data=action.payload;   
    },
    
    [GETDATAAPIFAIL]:(state,action)=>{
        state.data=action.payload;   
   },
}
)
export default getreducer;


