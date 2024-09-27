import './index.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Content from '../Content'

const Home = () => {
    return(
        <div className='home-container'>
            <Navbar/>
            <div className='content-container'>
                    
                
                    <Content/>
            </div>
        </div>
    )
}
export default Home