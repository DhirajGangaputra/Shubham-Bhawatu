import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';
import Navbar from '../Navbar'

function ItemDetails() {
    const location = useLocation();
    const { item } = location.state || {};  // Get the item data from state

    if (!item) {
        return <div>No item details available.</div>;
    }

    const { id, image_url, name, selling_value, cancelled_value, description } = item;

    const charges = selling_value > 500 ? 50 : 100;

    return (
        <>
        <Navbar/>
        <div className='item-details-container'>
            <div className='description-container'>
                <img src={image_url} alt={name} className='item-image' />
                <h1 className='item-name'>{name}</h1>
                <p className='item-description'>{description}</p>
            </div>
            <div className='order-container'>
                <h2>Buy From Here....</h2>
                <hr />
                <div className='name-value-container'>
                    <label className='labels-for-items'>Name: </label>
                    <h3 className='item-name'>{name}</h3>
                </div>
                <div className='name-value-container'>
                    <label className='labels-for-items'>Price: </label>
                    <h3 className='item-name'>Rs. {selling_value} <span className='cancelled-price'>{cancelled_value}</span></h3>
                </div>
                <div className='name-value-container'>
                    <label className='labels-for-items'>Charges: </label>
                    <h3 className='item-name'>Rs. {charges}</h3>
                </div>
                <hr />
                <div className='name-value-container'>
                    <label className='labels-for-items'>Total Amount: </label>
                    <h3 className='item-name'>Rs. {parseInt(selling_value) + charges}</h3>
                </div>
                <button type="button" className='confirm-btn'>Confirm Order</button>
            </div>
        </div>
        </>
    );
}

export default ItemDetails;
