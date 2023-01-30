import React from 'react';
import Navbar from '../Navbar';
import '../App.css';
import Footer from './Footer';
import Project from './Project';
import Network from "../assets/Checker_Network.gif"
import React_Memory from "../assets/React_Memory.gif";
import Library from "../assets/Library.gif";
import Etch from "../assets/Etch.gif";


const checker = {
  title: "Checker Java",
  description : "This is app replicates the game of Checker. The user can choose either play against the computer\n \
  , another player locally or through the network. The game session sessions communicate through the TCP protocol.",
  techstack:"Java, Swing library(GUI), ServerSocket library(networking)",
  gif:Network,
  repo_link:"https://github.com/Levrairagazzo/CheckerMultiplayerJava",
}

const memory = {
  title: "NBA Memory Game",
  description : "This web application is a Memory game made with NBA players of the 2000s. The user has to click on a player's photo every photo can only be cliked once. \n \
  The player cards get shuffled everytime the user clicks on a new card.  ",
  techstack:"Javascript, HTML, CSS, React.js ",
  gif:React_Memory,
  repo_link: "https://github.com/Levrairagazzo/memory-card-react",
  
}

const library = {
  title: "Library App",
  description : "Web application built with Javascript that allows the user to create and delete book entries into a digital library.",
  techstack:"Javascript, HTML, CSS",
  gif:Library,
  repo_link: "https://github.com/Levrairagazzo/MyLibrary",
  
}

const etch = {
  title: "Etch-A-Sketch",
  description : "This is app replicates . The user can choose either play against the computer\n \
  , another player locally or through the network. The game session sessions communicate through the TCP protocol.",
  techstack:"Javascript, HTML, CSS",
  gif:Etch,
  repo_link: "https://github.com/Levrairagazzo/Etch-a-Sketch",
}





function Projects() {
  return (
    <>
      <Navbar/>
        <ul className='bg-slate-50 text-center p-10 min-h-screen flex flex-wrap place-content-center font-Roboto'>
        <li className='md:w-1/3  bg-slate-100 drop-shadow-lg m-4'><Project project_info={memory}/></li>
        <li className='md:w-1/3  px-4  bg-slate-100 drop-shadow-lg m-4'><Project project_info={checker}/></li>
        <li className='md:w-1/3  px-4  bg-slate-100 drop-shadow-lg m-4'><Project project_info={library}/></li>
        <li className='md:w-1/3  px-4  bg-slate-100 drop-shadow-lg m-4'><Project project_info={etch}/></li>
        </ul>
        <Footer/>
    </>
  )
}

export default Projects