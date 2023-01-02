import axios from "axios";
export const POSTDATA='POSTDATA';
export const POSTDATAFAIL='POSTDATAFAIL'


export const postdata=(data)=>async(dispatch)=>{



    try{
        const response = await axios.post('http://localhost:5000/users',data)
        dispatch({type:'POSTDATA',payload:response.data})

    }catch(err){

        dispatch({type:'POSTDATAFAIL',payload:err})
    }

}

