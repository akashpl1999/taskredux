import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Todo from './component/AddTodo'
import AddTodo from './component/AddTodo';
import TodoItem from './component/TodoItem';
import TodoList from './component/TodoList';
import Register from './component/Register';
import Login from "./component/Login"
import Cart from "./component/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conver from './component/Conver';
//import Graph from './component/Graph';
import Apifront from './component/Apifront';
import Api from './component/Api';
import Dataapi from './component/Dataapi';

import Graph from './New/comp/Graph';



function App() {
  return (



    <div className="App">


          <BrowserRouter>

          <Routes>
            
          <Route path="/" element={<Register />}></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path="/todo" element={<AddTodo />} ></Route>
          <Route path="/regux" element={<Conver />} ></Route>
          <Route path="/cart" element={<Cart/>} ></Route>
          <Route path="/url" element={<Api/>} ></Route>
          <Route path='/dataurl' element={<Dataapi/>}></Route>

        
          <Route path="/graph" element={<Graph/>} ></Route>
    

          </Routes>
          </BrowserRouter>










     


      
       </div>



  );
}

export default App;
