import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
    let Pages =[
      {name:"About",link:"/about"},
      {name:"Projects",link:"/projects"},
      {name:"Resume",link:"/resume"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='drop-shadow-md w-full top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className=''>
        <span className='text-3xl text-teal-600 mr-1 pt-2 hover:cursor-pointer'>
        <Link to='/'>
        <ion-icon name="home-outline"/>
        </Link>
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <span className="text-teal-600 hover:cursor-pointer">
        <ion-icon name={open ? 'close':'menu'}>
    
        </ion-icon>
        </span>

      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-white md:z-auto z-[-1] left-0 
      w-full md:w-auto md:pl-0 ${open ? 'ease-in' : 'hidden'}`}>
        {
          Pages.map((page)=>(
            <li key={page.name} className='md:ml-8 text-xl md:my-0 my-7 md:text-teal-600 hover:cursor-pointer'>
                <Link className='text-xl text-teal-600 hover:text-gray-400 duration-500' to={page.link}>{page.name}</Link>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Nav