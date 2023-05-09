import React from 'react';
import Nav from './Nav';
import Sydney from '../assets/Sydney_lac.jpeg';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import TestComponent from './TestComponent';

function Home() {
  return (
    <>
    <Nav/>
    <div className=' bg-slate-50 p-10 pt-1 md:py-50 min-h-screen text-center max-md:text-xs'>
    
    <div className='flex flex-wrap mb-10 max-w-7xl mx-auto md:mt-32'>
      <div className='text-xl sm:text-5xl py-2 text-slate-700 font-medium text-justify  mx-auto my-auto max-w-screen-md font-Roboto'>
      <h2 className="py-4 text-center">
      Hi! I'm <span className='text-teal-600'>Sydney</span>.
      </h2>
      <h2 className="py-4 text-center">
      <span className='text-teal-600'>Software Engineer</span> based in France.
      </h2>
      <h2 className="py-4 text-center ">
      Welcome to my website!
      </h2>
      </div>
      <img className=' rounded-full w-80 h-96 object-fil  mx-auto my-auto shadow-2xl' src={Sydney} alt='Photo_de_moi'></img>
    </div>
    <button className=' bg-teal-500 rounded-full p-4 hover:text-gray-100 hover:scale-110 transition duration-300 ease-in-out font-Roboto drop-shadow-xl'>
    <Link className='cursor-pointer text-xl col-span-3   p-3 rounded-lg ' to='/About'>Learn more.</Link>
    </button>

  
    </div>

    {/* <TestComponent/> */}
    <Footer/>
 </>
  )
}

export default Home