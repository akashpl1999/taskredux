//import { createStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './Redux/Counterslice';
import  TodoReducer  from './Redux/Todoslice';
import Registerslice from './Redux/Registerslice';
import Cartslice from './Redux/Cartslice';
import Dataslice from './Redux/Apislice';
import DataReducer from './Redux/Datareducer';
import postreducer from './Redux/PostReducer';
 import Dataapi from './Redux/A1'
 import getreducer from './New/redux/Getreducer';

 
const store = configureStore({


      reducer:{

       user: counterReducer,

       todo:TodoReducer,

       register:Registerslice,

       cart:Cartslice,

       api:Dataslice,

       data:DataReducer,

       dataapi:Dataapi,

       post:postreducer,

       getdata:getreducer

   

      }
       });


export default store;
