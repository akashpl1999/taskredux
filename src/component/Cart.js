import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { addcart } from '../Redux/Cartslice';

const Cart = () => {

 const dispatch=useDispatch();

 const data=useSelector(state=>state.cart);


    return (



        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', margin: '40px' }} >


            <p style={{ padding: '10px', backgroundColor: 'lightcoral', color: 'white', margin: "30px" }}>{data.length}</p>

            <Button variant='outlined' onClick={()=>dispatch(addcart(1))} style={{ backgroundColor: 'lightgoldenrodyellow' }}>
                one
            </Button>

            <Button variant='outlined' onClick={()=>dispatch(addcart(2))} style={{ backgroundColor: 'lightgoldenrodyellow' }}>
                two
            </Button>


            <Button variant='outlined' onClick={()=>dispatch(addcart(3))} style={{ backgroundColor: 'lightgoldenrodyellow' }}>
                Three
            </Button>
            <Button variant='outlined' onClick={()=>dispatch(addcart(4))} style={{ backgroundColor: 'lightgoldenrodyellow' }}>
                Four
            </Button>









        </div>


    )
}

export default Cart