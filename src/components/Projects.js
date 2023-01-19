import React from 'react';
import Navbar from '../Navbar';
import '../App.css';
import Footer from './Footer';
import Project from './Project';
import cat from "../assets/cat.gif"
import React_Memory from "../assets/React_Memory.gif";

function Projects() {
  return (
    <>
      <Navbar/>
        <ul className='bg-slate-50 text-center p-10 py-10 min-h-screen flex flex-wrap'>
        <li className='md:w-1/2'><Project title={'React NBA Memory Game'} gif={React_Memory}/></li>
        <li className='md:w-1/2'><Project title={'React NBA Memory Game'} gif={React_Memory}/></li>
        <li className='md:w-1/2'><Project title={'React NBA Memory Game'} gif={React_Memory}/></li>
        <li className='md:w-1/2'><Project title={'React NBA Memory Game'} gif={React_Memory}/></li>
        </ul>
        <Footer/>
    </>
  )
}

export default Projects