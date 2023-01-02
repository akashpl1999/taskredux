// import React from 'react'


// import { LineChart, Line, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

// const data = [
//     {
//         "name": "Page A",
//         "uv": 4000,
//         "pv": 2400
//     },
//     {
//         "name": "Page B",
//         "uv": 3000,
//         "pv": 1398
//     },
//     {
//         "name": "Page C",
//         "uv": 2000,
//         "pv": 9800
//     },
//     {
//         "name": "Page D",
//         "uv": 2780,
//         "pv": 3908
//     },
//     {
//         "name": "Page E",
//         "uv": 1890,
//         "pv": 4800
//     },
//     {
//         "name": "Page F",
//         "uv": 2390,
//         "pv": 3800
//     },
//     {
//         "name": "Page G",
//         "uv": 3490,
//         "pv": 4300
//     }
// ]




// const Graph = () => {
//     return (

//         <div>
//             <div>
//                   <ul  style={{ display:'flex', justifyContent: 'flex-start',listStyleType:'none',  backgroundColor:'cyan'  }}>
            
//                     <li style={{margin:'10px'}}>Home</li>
//                     <li style={{margin:'10px'}}>Blog</li>
//                     <li style={{margin:'10px'}}>contact</li>
//                     <li style={{margin:'10px'}}>Service</li>

//                 </ul>
//             </div>
//             <div style={{display:"flex",justifyContent:'center',alignItems:"center",padding:'10px', backgroundColor:"lightgray",color:'white',bottom:"0px", position:'absolute' }}>
//                    footer @copay right in akash.com
//           </div>

            
//             <div style={{display:'flex',flexDirection:'row', justifyContent:"center"}}>
                
//                   <div style={{ margin:'30px 0px 0px 20px', padding:"10px", width:"30%",border:"2px solid black", height:'450px'}}>


//                   </div>



//             <div style={{ margin: '30px', border:"2px solid black",padding:'10px', width:'70%',float:'right',height:"450px", }}>

//                 <BarChart width={530} height={350} data={data} style={{position:'relative',top:"40px", left:'70px'}}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="pv" fill="#8884d8" />
//                     <Bar dataKey="uv" fill="#82ca9d" />
//                 </BarChart>

//             </div>
//           </div>



       
//         </div>


//     )
// }

// export default Graph