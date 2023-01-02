
export const GETDATAAPISUCCESS='GETDATAAPISUCCESS';
export const GETDATAAPIFAIL='GETDATAAPIFAIL';


export const Getdata=async(dispatch, year, month, country,mon)=>{
    try{
        const response=await fetch(`http://localhost:5000/users?${year && 'year='+year+'&'}${month && 'month='+month+'&'}${country && 'country='+country}`)
        const data=await response.json();
        dispatch({type:GETDATAAPISUCCESS, payload:data})
    }catch(err){
        dispatch({type:GETDATAAPIFAIL,payload:err.message})
    }
}