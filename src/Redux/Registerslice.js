import { createSlice } from "@reduxjs/toolkit";


export const Regslice = createSlice({

  name: "Register",
  initialState:[],
  reducers:{
      adduser: (state, action)=>{

          const newTask = {
              ...action.payload,id: Math.floor(Math.random()*100000-1)
          }
          state.push(newTask);
          
      },


   
   }
  
});



export const {adduser} = Regslice.actions;

export default Regslice.reducer;
