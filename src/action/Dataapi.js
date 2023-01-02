export const FETCH_DATA_SUCCESS='FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const FETCH_DATA_LOADING='FETCH_DATA_LOADING'

export const fetchData=()=>async(dispatch)=>{
    try{
        dispatch({type:FETCH_DATA_LOADING,payload:true});

        const response=await fetch('https://jsonplaceholder.typicode.com/todos')
        
        const data=await response.json();
        
        
        dispatch({type:FETCH_DATA_SUCCESS,payload:data});


    }catch(err){


        dispatch({type:FETCH_DATA_ERROR,payload:err.message})


    }

}