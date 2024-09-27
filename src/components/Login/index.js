import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Corrected hook name

  const takeUsernameInput = (event) => {
    setUsername(event.target.value); // Corrected typo
  };

  const takeEmailInput = (event) => {
    setEmail(event.target.value); // Corrected typo
  };

  const takePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const letsLogin = (event) => {
    event.preventDefault();
    navigate('/'); // Corrected navigation method
    console.log('Login Successfully');
  };

  return (
    <div className="app-container">
      <div className="card-container">
        <h1 className='main-heading'>Let's Login</h1>
        <form onSubmit={letsLogin}>
          <div className="input-container">
            <label htmlFor="username" className="labelForName">
              Username
            </label>
            <input type="text" id="username" placeholder="Username" value={username} onChange={takeUsernameInput} className="input-box" />
          </div>
          <div className="input-container">
            <label htmlFor="username" className="labelForName">
              Gender
            </label>
            <select  id="username" value={username} onChange={takeUsernameInput} className="input-box">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="email" className="labelForName">
              Email
            </label>
            <input type="email" id="email" placeholder="Email" value={email} onChange={takeEmailInput} className="input-box" />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="labelForName">
              Password
            </label>
            <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Password" value={password} onChange={takePasswordInput} className="input-box" />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="showPassword" onChange={toggleShowPassword} />
            <label htmlFor="showPassword" className='labelForCheckbox'>Show Password</label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
