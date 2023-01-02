import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteTask, UpdateTask } from "../Redux/Todoslice";
import { Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
      width: '200px',
      margin:'20px',
      backgroundColor:'lightgray'
    
    },
    media: {
      height: 140,
    },
  });



const TodoItem = ({ id, title }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [ename, setename] = useState("")
    const [toggle, settoggle] = useState(false)

    const removeTask = () => {
        dispatch(
            deleteTask({
                id: id
            })
        )
    }

    const edittask = () => {
        if (toggle) {
            dispatch(
                UpdateTask({ id: id, name: ename })
            );
            settoggle(false);
        } else {
            settoggle(true)
        }




    }

    return (

        <>
            <Card className={classes.root}>
                <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>

                    <Typography>
                        {

                            toggle && <TextField variant='outlined' type="text" defaultValue={title} onChange={(e) => setename(e.target.value)} />

                        }

                    </Typography>
                </CardContent>
                <CardActions>

                    <Button className="remove-task-button" onClick={() => {
                        removeTask();
                    }}>Delete</Button>

                    <Button className="remove-task-button" onClick={() => {
                        edittask();
                    }}>Update</Button>


                </CardActions>
            </Card>




        </>


    );
};

export default TodoItem;
