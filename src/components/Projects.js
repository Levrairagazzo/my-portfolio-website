import React from 'react';
import Navbar from '../Navbar';
import '../App.css';
import Footer from './Footer';

function Projects() {
  return (
    <>
      <Navbar/>
      <h1>This is the about Project section</h1>
        <ul className='projects-container'>
            <li className='project-box'>Project X</li>
            <li className='project-box'>Project X</li>
            <li className='project-box'>Project X</li>
            <li className='project-box'>Project X</li>
            <li className='project-box'>Project X</li>
            <li className='project-box'>Project X</li>
            <li className='project-box'>Project X</li>
            <li className='project-box'>Project X</li>
        </ul>
        <Footer/>
    </>
  )
}

export default Projects