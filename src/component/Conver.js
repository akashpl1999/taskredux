import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'

const Conver = () => {
  
   const[data,setdata]=useState("object id")
   const[result,setresult]=useState("")

    function toCamelCase(str) {
        let str1 = str.replace(/[^a-zA-Z0-9 ]/g, '');
        str1 = str1.replace(/\s(.)/g, function (match, group1) {
          return group1.toUpperCase();
        });
        setresult(str1)
        return str1;
      }

      
      
  
  
  
    return (


    <div style={{margin:'20px', }}>

       <TextField variant='outlined' onChange={(e)=>setdata(e.target.value)} style={{margin:'20px'}}/>

        <Button onClick={()=>toCamelCase(data)} style={{backgroundColor:'red', color:'white',margin:"30px"}}>submit</Button>

    



               <div>
                  {result}
               </div>

           

    </div>
  )
}

export default Conver