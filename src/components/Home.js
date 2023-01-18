import React from 'react';
import Navbar from '../Navbar';
import Sydney from '../Sydney_Canon.jpeg';
import Footer from './Footer';

function Home() {
  return (
    <>
    <Navbar/>

    <div className='home-middle'>
      <h1>Hi! I'm Sydney, Junior Full-Stack Developer, welcome to my website! </h1>
      <img className='profile-picture' src={Sydney} alt='Photo_de_moi'></img>
    </div>
  
    <p> I'm a Junior Software Engineer with experience in a range of programming languages including Java, Javascript, and Python, 
        I am skilled in both front-end, back-end and mobile development.I am excited to connect with other professionals in the tech
        industry and am open to new opportunities.
    </p>
    <Footer/>
 </>
  )
}

export default Home