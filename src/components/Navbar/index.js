import './index.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate('/login');
    };

    return (
        <nav className="navbar-container">
            <Link to="/">
                <div className='logo-name-container'>
                    <img src={`${process.env.PUBLIC_URL}/logo-for-web.png`} className='logo' alt="logo" />
                    <h1 className='web-name'>Shubham Bhawatu</h1>
                </div>
            </Link>
            <ul className='option-list-container'>
                <li className='option-name'><Link to="/">Home</Link></li>
                <li className='option-name'><Link to="/cart">Cart</Link></li>
                <li className='option-name'><Link to="/about">About</Link></li>
            </ul>
            <button type="button" className="login-btn" onClick={onClickLogin}>Login</button>
        </nav>
    );
};

export default Navbar;
