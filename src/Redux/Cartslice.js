import { createSlice } from "@reduxjs/toolkit";



export const Cartslice=createSlice({
    name:'cart',
    initialState:[],
    
    
    reducers:{
        
        addcart:(state,action)=>{

            const item=action.payload

            if(state.includes(item)){
                alert("already add")

            }else{
                return [...state, item];
            }

        }


    },
})

export const { addcart} = Cartslice.actions;
export default Cartslice.reducer;
