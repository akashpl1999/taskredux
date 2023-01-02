import React, { useEffect, useState } from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'
import { TextField, MenuItem } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Getdata } from '../../New/Action/Getaction';
import { useDispatch, useSelector } from 'react-redux';




const useStyles = makeStyles({


    root: {
        // overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },

    chat: {
        margin: '50px '

    },

    main: {
        width: '75%',

        height: "100vh",
        margin: '10px'




    },

    side: {

        width: '25%',
        height: '100vh',
        margin: '10px',
        borderRight:"1px solid black"

    },

    lable: {
        display: "inline-block",
        marginBottom: '20px'

    }






});


const Chats = () => {

    const classes = useStyles();


    const dispatch = useDispatch();
    const state = useSelector(state => state.getdata);
    const [year, setyear] = useState('2021')
    const [month, setmonth] = useState('jan')
    const [country, setcountry] = useState('india');
    const [mon,setmon]=useState('feb')
    const handleYearChange = (e) => {
        setyear(e.target.value);
    }

    const handleMonth = (e) => {
        setmonth(e.target.value)
    }

    const handleCountry = (e) => {
        setcountry(e.target.value)
    }
    console.log(state)

    useEffect(() => {


        Getdata(dispatch, year, month, country,);


    }, [year, month, country])

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]







    return (


        <div >

            <Navbar />


            <div className={classes.root}>



                <div className={classes.side}>


                    <div >
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>





                </div>


                <div className={classes.main}>

                    <div >

                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: 'center', margin: '2px' }} >

                            <label style={{ fontSize: '14px', fontWeight: "10px" }}> Year :</label>
                            <select style={{ width: "150px", margin: '10px', padding: "5px" }} variant='outlined' value={year}  onChange={handleYearChange}>

                                {
                                    [2021, 2022].map(elm => {
                                        return <option value={elm}>{elm}</option>

                                    })}

                            </select>

                            <label style={{ fontSize: '14px', fontWeight: "10px" }}   >Month :</label>
                            <select style={{ width: "150px", margin: '10px' ,padding: "5px"}} variant='outlined' value={month}  onChange={handleMonth}>

                                {
                                    ["jan", "feb"].map((elm) => {
                                        return <option value={elm}>{elm}</option>
                                    })
                                }
                            </select>


                            <label style={{ fontSize: '14px', fontWeight: "10px" }}  >Country :</label>
                            <select style={{ width: "150px", margin: '10px' , padding: "5px"}} variant='outlined' value={country} select onChange={handleCountry}  >
                              
                                {
                                    ['india', 'us'].map((elm) => {
                                        return <option value={elm}>{elm}</option>
                                    })
                                }

                            </select>

                        </div>


                        {
                            Array.isArray(state.data) && state.data.map(st => {
                                console.log(st.data);
                                return <BarChart width={530} height={350} data={st.data} className={classes.chat} >
                                    <CartesianGrid strokeDasharray="3 " />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend/>
                                    <Bar dataKey="pv" fill="#8884d8" />
                                    <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart>
                            })
                        }


                    </div>



                </div>






            </div>

        </div>

    )
}

export default Chats











//   {
//     "name": "Page A",
//     "uv": 4000,
//     "pv": 2400
//   },
//   {
//     "name": "Page B",
//     "uv": 3000,
//     "pv": 1398
//   },
//   {
//     "name": "Page C",
//     "uv": 2000,
//     "pv": 9800
//   },
//   {
//     "name": "Page D",
//     "uv": 2780,
//     "pv": 3908
//   },
//   {
//     "name": "Page E",
//     "uv": 1890,
//     "pv": 4800
//   },
//   {
//     "name": "Page F",
//     "uv": 2390,
//     "pv": 3800
//   },
//   {
//     "name": "Page G",
//     "uv": 3490,
//     "pv": 4300
//   }
// ]
