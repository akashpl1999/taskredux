import React, { useEffect, useState } from 'react'
import {getData} from '../action/Datslice';
import { useDispatch ,useSelector} from 'react-redux';
import { Button } from '@material-ui/core';

const Api = () => {


  const dispatch=useDispatch()
  

  const [data,setdata]=useState()

  const info=useSelector(state=>state.dataapi)

  console.log(info)
  


//   const handledata=()=>{
//     dispatch(fetchData())

//   }

  useEffect(()=>{

    dispatch(getData())
   

  },[])


  return (
    <div>

       {info.data.map((elm)=>elm.title)}

    </div>
  )
}

export default Api