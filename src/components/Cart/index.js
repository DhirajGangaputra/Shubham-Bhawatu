import './index.css'
import {useState} from 'react'
import Navbar from '../Navbar'


const Cart = () => {
    const {totalBill, setTotalBill}= useState(0)

    return(
        <>
            <Navbar/>
        </>
    )
}
export default Cart