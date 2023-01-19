import React from 'react';
import Navbar from '../Navbar';
import '../App.css';
import Footer from './Footer';
import Project from './Project';

function Projects() {
  return (
    <>
      <Navbar/>
        <ul className='bg-gradient-to-b from-amber-100 to-rose-200 text-center p-10 py-10 min-h-screen flex flex-wrap gap-6'>
        <li className=''><Project title={'title'}/></li>
        <li className=''><Project title={'title'}/></li>
        <li className=''><Project title={'title'}/></li>
        <li className=''><Project title={'title'}/></li>
        <li className=''><Project title={'title'}/></li>
        <li className=''><Project title={'title'}/></li>
        <li className=''><Project title={'title'}/></li>
        <li className=''><Project title={'title'}/></li>
        </ul>
        <Footer/>
    </>
  )
}

export default Projects