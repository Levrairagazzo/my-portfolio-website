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
    <h2 className="text-5xl py-2 text-teal-600 font-medium text-justify  mx-auto my-auto max-w-screen-md animate-wiggle font-Roboto">
    Hi! I'm Sydney, Junior Full-Stack Developer, welcome to my website!
    </h2>
      <img className=' rounded-full w-80 h-96 object-fil  mx-auto my-auto shadow-2xl' src={Sydney} alt='Photo_de_moi'></img>
    </div>
    <button className=' bg-teal-500 rounded-full p-4 hover:text-gray-100 font-Roboto drop-shadow-xl'>
    <Link className='cursor-pointer text-xl col-span-3   p-3 rounded-lg ' to='/About'>Learn more.</Link>
    </button>

  
    {/* <p className='text-justify font-Roboto my-10 p-10 text-2xl max-w-7xl mx-auto'> I'm a Junior Software Engineer with experience in a range of programming languages including Java, Javascript, and Python, 
        I am skilled in both front-end, back-end and mobile development.I am excited to connect with other professionals in the tech
        industry and am open to new opportunities.
    </p> */}
    </div>
    
    <Footer/>
 </>
  )
}

export default Home