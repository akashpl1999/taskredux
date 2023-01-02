import { createSlice } from "@reduxjs/toolkit";


export const tasksSlice = createSlice({

  name: "tasks",
  initialState:[],
  reducers:{
    
      addTask: (state, action)=>{
          const newTask = {
              id: new Date(),
              name: action.payload.task
          }
          state.push(newTask);
      },


      deleteTask: (state, action)=>{

          return state.filter((item) => item.id !== action.payload.id);
          
      },

      UpdateTask:(state,action)=>{

        return state.map((todo)=>{
          if(todo.id === action.payload.id ){
            return action.payload
          }
          return todo
        })
      

      }
   
   }
  
});

export const {addTask, deleteTask,UpdateTask} = tasksSlice.actions;

export default tasksSlice.reducer;
