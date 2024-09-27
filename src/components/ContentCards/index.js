import React from 'react'
import './index.css'

function ContentCards({ data, getDetails }) {
    const { id, image_url, name, selling_value, cancelled_value } = data;

    return (
        <div>
            <img src={image_url} alt="RI-1" className="items-img" />
            <h3>{name}</h3>
            <div>
                <p className='selling-price'>Rs.{selling_value}
                    <span className='cancelled-price'>  {cancelled_value}</span>
                </p>
            </div>
            <p>Ratings</p>
            <button type="button" className='buy-now-btn' onClick={getDetails}>Buy Now!</button>
        </div>
    )
}

export default ContentCards;
