import React from 'react';
import './index.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../Carousel';
import ContentCards from '../ContentCards';
import ItemDetails from '../ItemDetails';


const data={
    rudraksha:[
        {id:1, name:'1 Mukhi', description:'This is the Symbol of Devotion. The Rudraksha will changes your life.', selling_value:'5000', cancelled_value: '8000', image_url: `${process.env.PUBLIC_URL}/rudraksha-logo.jpg`}, 
        {id:2, name:'2 Mukhi', description:'This is the Symbol of Devotion. The Rudraksha will changes your life.', selling_value:'4500', cancelled_value: '7500', image_url: `${process.env.PUBLIC_URL}/rudraksha-logo.jpg`}, 
        {id:3, name:'3 Mukhi', description:'This is the Symbol of Devotion. The Rudraksha will changes your life.',  selling_value:'4000', cancelled_value: '7000', image_url: `${process.env.PUBLIC_URL}/rudraksha-logo.jpg`},
        {id:4, name:'4 Mukhi', description:'This is the Symbol of Devotion. The Rudraksha will changes your life.',  selling_value:'3500', cancelled_value: '4000', image_url: `${process.env.PUBLIC_URL}/rudraksha-logo.jpg`},
        {id:5, name:'5 Mukhi', description:'This is the Symbol of Devotion. The Rudraksha will changes your life.',  selling_value:'1000', cancelled_value: '2000', image_url: `${process.env.PUBLIC_URL}/rudraksha-logo.jpg`}
    ],
    tulsimala:[
        {id:1, name:'Shri Radha Naam', selling_value:'5000', cancelled_value: '8000', image_url: `${process.env.PUBLIC_URL}/Radha Tulsi mala.jpg`}, 
        {id:2, name:'Shri Ram Naam', selling_value:'4500', cancelled_value: '7500', image_url: `${process.env.PUBLIC_URL}/Radha Tulsi mala.jpg`}, 
        {id:3, name:'Shri RadhaKrishna Naam', selling_value:'4000', cancelled_value: '7000', image_url: `${process.env.PUBLIC_URL}/Radha Tulsi mala.jpg`},
        {id:4, name:'Chanting Tulsi Mala', selling_value:'3500', cancelled_value: '4000', image_url: `${process.env.PUBLIC_URL}/Radha Tulsi mala.jpg`},
        {id:5, name:'Tulsi Mala', selling_value:'1000', cancelled_value: '2000', image_url: `${process.env.PUBLIC_URL}/Radha Tulsi mala.jpg`}
    ],
    crystalngems:[
        {id:1, name:'Panna', selling_value:'5000', cancelled_value: '8000'}, 
        {id:2, name:'Pushkar Raj', selling_value:'4500', cancelled_value: '7500'}, 
        {id:3, name:'Gomej', selling_value:'4000', cancelled_value: '7000'},
        {id:4, name:'Pachu', selling_value:'3500', cancelled_value: '4000'},
        {id:5, name:'Crystal D', selling_value:'1000', cancelled_value: '2000'}
    ]
}

const Content = () => {
    const[itemDetailsList, setItemDetailsList ] = useState([])
    const navigate = useNavigate()

    const getRudrakshaDetails = (item) => {
        setItemDetailsList([item]);
        navigate(`/itemDetails/${item.id}`, { state: { item } });
    };

    return(
        <div className="main-content-container">
            <Carousel/>
            <h1>To Connect with that Supreme Energy lets get some equipments with the Help, Trust and Guidance of</h1>
            <h1>SHUBHAM BHAWATU</h1>
            <div className="selling-container">
                <button type="button" className='category-heading'>Rudraksha</button>
                <hr className='hr'/>
                <ul className='items-container'>
                    {data.rudraksha.map(each=>(
                        <button type="button" key={each.id} className='item-btn' onClick={() => getRudrakshaDetails(each)}>
                            <li className='item-itself' >
                                <ContentCards 
                                    data={each} 
                                    getDetails={() => getRudrakshaDetails(each.id)} 
                                />
                            </li>
                        </button>
                    ))}
                </ul>
            </div>

            <div className="selling-container">
                <button type="button" className='category-heading'>Tulsi Mala</button>
                <hr className='hr'/>
                <ul className='items-container'>
                    {data.tulsimala.map(each=>(
                        <button type="button"  key={each.id} className='item-btn' onClick={() => getRudrakshaDetails(each)}>
                            <li className='item-itself' >
                                <ContentCards 
                                    data={each} 
                                    getDetails={() => getRudrakshaDetails(each.id)} 
                                />
                            </li>
                        </button>
                    ))}
                </ul>
            </div>

            <div className="selling-container">
                <button type="button" className='category-heading'>Crystal and Gems</button>
                <hr className='hr'/>
                <ul className='items-container'>
                    {data.crystalngems.map(each=>(
                        <button type="button"  key={each.id} className='item-btn' onClick={() => getRudrakshaDetails(each)}>
                            <li className='item-itself'>
                                <ContentCards 
                                    data={each} 
                                    getDetails={() => getRudrakshaDetails(each.id)} 
                                />
                            </li>
                        </button>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Content