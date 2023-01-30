import React from 'react';
import Navbar from '../Navbar';
import Sydney from '../assets/Sydney_lac.jpeg';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Navbar/>
    <div className=' bg-slate-50 text-center p-10 py-10 min-h-screen'>
    
    <div className='flex flex-wrap my-10 max-w-7xl mx-auto'>
      <div className='text-5xl py-2 text-slate-700 font-medium text-justify  mx-auto my-auto max-w-screen-md font-Roboto'>
      <h2 className="py-4">
      Hi! I'm <span className='text-teal-600'>Sydney</span>.
      </h2>
      <h2 className="py-4">
      <span className='text-teal-600'>Software Engineer</span> based in Oakland, CA.
      </h2>
      <h2 className="py-4">
      Welcome to my website!
      </h2>
      </div>
      
    {/* <h2 className="text-5xl py-2 text-teal-600 font-medium mx-auto my-auto max-w-screen-md animate-wiggle font-Roboto test-justify">
    Hi! I'm Sydney! Full Stack Developper based in Oakland,CA. Welcome to my website!
    </h2> */}
      <img className=' rounded-full w-80 h-96 object-fil  mx-auto my-auto shadow-2xl' src={Sydney} alt='Photo_de_moi'></img>
    </div>
    <button className=' bg-teal-500 rounded-full p-4 hover:text-gray-100 hover:scale-110 transition duration-300 ease-in-out font-Roboto drop-shadow-xl'>
    <Link className='cursor-pointer text-xl col-span-3   p-3 rounded-lg ' to='/About'>Learn more.</Link>
    </button>

  
    </div>
    
    <Footer/>
 </>
  )
}

export default Home