import './index.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
const Navbar = () => {

    return ( <nav className=' font-Roboto  bg-slate-100  gap-4 p-5 drop-shadow-lg'>
        <ul className='grid grid-cols-6 text-teal-600'>
            <li className=' col-span-3 hover:animate-bounce'><Link className='cursor-pointer text-xl col-span-3   p-3 rounded-lg ' to='/'>Home</Link></li>
            <li className='hover:animate-bounce'><Link className='cursor-pointer  text-xl p-3 rounded-lg' to='/about'>About</Link></li>
            <li className='hover:animate-bounce'><Link className='cursor-pointer  text-xl  p-3 rounded-lg'to='/projects'>Projects</Link></li>
            <li className='hover:animate-bounce'> <Link className='cursor-pointer  text-xl p-3 rounded-lg'>Resume</Link></li>
        </ul>
       

    </nav> );
}
 
export default Navbar;