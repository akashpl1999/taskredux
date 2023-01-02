import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Todoslice";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Button, TextField } from '@material-ui/core';

import TodoList from './TodoList';

const AddTodo = () => {

    
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        if (value.trim().length === 0) {
            alert("Enter a task before adding !!");
            setValue("");
            return;
        }

        dispatch(
            addTask({
                task: value
            })
        );

        setValue("");
    };

    return (



       

            <>


                <div style={{margin:"50px"}}>


                    <TextField
                       maxWidth
                        style={{margin:'20px',color:'white', backgroundColor:'white',}}
                        variant='outlined'
                        type="text"
                        className="task-input"
                        placeholder="Add task"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />

                    <Button style={{ backgroundColor: "red", color: "white", margin:"30px" }} className="task-button" onClick={onSubmit}>
                        Save
                    </Button>

                </div>

                <TodoList/>

            </>
    


    );
};

export default AddTodo;
