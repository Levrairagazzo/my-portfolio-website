import React from 'react';
import Navbar from '../Navbar';
import Sydney from '../Sydney_Canon.jpeg';
import Footer from './Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <div className=' bg-gradient-to-b from-amber-100 to-rose-200 text-center p-10 py-10 min-h-screen'>
    
    <div className='flex flex-wrap my-10'>
    <h2 className="text-5xl py-2 text-teal-600 font-medium text-justify  mx-auto my-auto max-w-screen-md animate-wiggle">
    Hi! I'm Sydney, Junior Full-Stack Developer, welcome to my website!
    </h2>
      <img className=' rounded-full w-80 h-80 relative m-20 py-5  mx-auto my-auto' src={Sydney} alt='Photo_de_moi'></img>
    </div>
  
    <p className='text-justify font-semibold my-10 p-10 text-2xl'> I'm a Junior Software Engineer with experience in a range of programming languages including Java, Javascript, and Python, 
        I am skilled in both front-end, back-end and mobile development.I am excited to connect with other professionals in the tech
        industry and am open to new opportunities.
    </p>
    </div>
    
    <Footer/>
 </>
  )
}

export default Home