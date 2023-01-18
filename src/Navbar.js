import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
const Navbar = () => {

    return ( <nav className="main-navbar">
        <Link className='main-navbar-item' to='/'>Home</Link>
        <Link className='main-navbar-item' to='/about'>About</Link>
        <Link className='main-navbar-item'to='/projects'>Projects</Link>
        <Link className='main-navbar-item'>Resume</Link>


    </nav> );
}
 
export default Navbar;