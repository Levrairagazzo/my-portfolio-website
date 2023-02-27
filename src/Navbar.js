import './index.css';
import {Link} from 'react-router-dom';
const Navbar = () => {

    return ( 
    <header className=''>
        <nav className=' font-Roboto  bg-slate-100  gap-4 p-5 px-20 drop-shadow-lg max-md:px-2 '>
        <ul className=' grid grid-cols-6 text-teal-600 max-md:flex max-md:space-x-4 max-md:place-content-between'>
            <li className='col-span-3'>
                <button type="button" className=' hover:text-slate-800 hover:scale-110 transition duration-300 ease-in-out '>
                    <Link className='text-xl ' to='/my-portfolio-website'>Home</Link>
                </button>
            </li>    
            <li className=''>
            <button type="button" className='  hover:text-slate-800 hover:scale-110 transition duration-300 ease-in-out '>
                    <Link className='text-xl ' to='/about'>About</Link>
            </button> 
            </li>
            <li className=''>
                <button type="button" className='  hover:text-slate-800 hover:scale-110 transition duration-300 ease-in-out '>
                        <Link className='text-xl ' to='/projects'>Projects</Link>
                </button> 
            </li>
            <li className=''>
                <button type="button" className='  hover:text-slate-800 hover:scale-110 transition duration-300 ease-in-out '>
                        <Link className='text-xl ' to='/resume'>Resume</Link>
                </button> 
            </li>
        </ul>
       

    </nav>
    </header>
     );
}
 
export default Navbar;