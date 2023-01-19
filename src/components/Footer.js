import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";


function Footer() {
  return (
    <>
     <footer className="bg-gray-200 text-10xl relative inset-x-0 bottom-0 p-2 flex justify-center">
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
           <AiFillGithub/>
           <AiFillLinkedin/>
           <AiFillTwitterCircle/>           

        </div>
       
    </footer> 
    </>
  )
}

export default Footer