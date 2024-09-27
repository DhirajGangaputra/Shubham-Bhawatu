import './index.css'
import Navbar from '../Navbar'

const About = () =>{
    return(
        <div className='about-container'>
            <Navbar/>
            <div className='details-container'>
            <img src="" alt="About Image"/>
            <h1 className='heading'> We are Shubham Bhawatu. </h1>
            <p className='description'>We belongs to <a href="https://en.wikipedia.org/wiki/Trimbakeshwar_Shiva_Temple">Shri Kshetra Jyotirlinga Trimbakeshwar</a> which located at Trimbakeshwar, Nashik, Maharashtra in Bharat(India).
                IN Our History, there are 12 Jyotirlinga's of Shri Mahadev they are as follows, </p>
                <ul>
                    <li className='temple-name'>Shri Someshwar Mahadev, Gujrat</li>
                    <li className='temple-name'>Shri Mallikarjun Mahadev, Shrishailam</li>
                    <li className='temple-name'>Shri Mahakal Mahadev, Ujjain(Avantika Nagari)</li>
                    <li className='temple-name'>Shri Omkareshwar Mahadev, Khandwa</li>
                    <li className='temple-name'>Shri Vaidhyanath Mahadev, (Parli)Maharashtra or Jharkhand </li>
                    <li className='temple-name'>Shri Bhimashankar Mahadev, (Dakinya)Maharashtra</li>
                    <li className='temple-name'>Shri Rameshwar Mahadev, Setubandh</li>
                    <li className='temple-name'>Shri Nagnath Mahadev, Daruka-Vana</li>
                    <li className='temple-name'>Shri Vishweshwar Mahadev, Waranasi</li>
                    <li className='temple-name'>Shri Trimbakeshwar Mahadev, Trimbakeshwar</li>
                    <li className='temple-name'>Shri Kedarnath Mahadev, Kedarnath</li>
                    <li className='temple-name'>Shri Ghrishneshwar Mahadev, Chatrapati Sambhaji Nagar </li>
                </ul>
            <p className='description'>As well as,  An Origin Of Shri Godavri Mata(Godavari River) is loacted in the Shri Kshetra Trimbakeshwar. And also The Nath Sampraday and Warkari Sampraday Sant Shri Nivrutinath MAharaj Samadhi located here.
                So, we have the Knowledge as well as the value of that knowledge about devotion, bhakti, rudraksha, tulsi mala, crystal and Gems, Books and many more. ThatsWhy, from such Devotional, Pure atmoshpher we provide the Rudraksha, Tulsi Mala, Crystal and Gems and Many more things to blessed people's.
                            </p>
                            </div>
        </div>
    )
}
export default About