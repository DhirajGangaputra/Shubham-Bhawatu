import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Cart from './components/Cart'
import About from './components/About';
import ItemDetails from './components/ItemDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="/itemDetails/:id" element={<ItemDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
