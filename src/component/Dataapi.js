import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchData } from '../action/Dataapi';
import { useSelector } from 'react-redux';

const Dataapi = () => {
    const dispatch = useDispatch();

    const datasel=useSelector(state=>state.data)
    console.log(datasel)

    const handleFetchData = () => {
        dispatch(fetchData());
    };

    return (


        <div>


            <button onClick={handleFetchData}>Fetch data</button>


        </div>

    )
}

export default Dataapi

