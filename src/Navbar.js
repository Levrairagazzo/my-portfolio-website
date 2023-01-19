import './index.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
const Navbar = () => {

    return ( <nav className=' font-sans bg-amber-100  gap-4 p-5'>
        <ul className='grid grid-cols-6'>
            <li className=' col-span-3 hover:animate-bounce'><Link className='cursor-pointer font-burtons text-xl col-span-3  bg-amber-200 p-3 rounded-lg ' to='/'>Home</Link></li>
            <li className='hover:animate-bounce'><Link className='cursor-pointer font-burtons text-xl text-teal-600 bg-amber-200 p-3 rounded-lg' to='/about'>About</Link></li>
            <li className='hover:animate-bounce'><Link className='cursor-pointer font-burtons text-xl text-teal-600 bg-amber-200 p-3 rounded-lg'to='/projects'>Projects</Link></li>
            <li className='hover:animate-bounce'> <Link className='cursor-pointer font-burtons text-xl text-teal-600 bg-amber-200 p-3 rounded-lg'>Resume</Link></li>
        </ul>
       

    </nav> );
}
 
export default Navbar;