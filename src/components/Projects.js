import React from 'react';
import Nav from './Nav';
import '../App.css';
import Footer from './Footer';
import Project from './Project';
import Network from "../assets/Checker_Network.gif"
import React_Memory from "../assets/React_Memory.gif";
import Library from "../assets/Library.gif";
import Mern from "../assets/Mern.gif";


const projects = [{
  title: "Java Checkers",
  french_title: "Jeu de dames en Java",
  description : "This is app replicates the game of Checkers. The user can choose either play against the computer\n \
  , another player locally or through the network. The game session sessions communicate through the TCP protocol.",
  techstack:"Java, Swing library(GUI), ServerSocket library(networking)",
  french_description: "Cette application reproduit le jeu de dames. L'utilisateur peut choisir de jouer contre l'ordinateur, contre un autre joueur en local ou à travers le réseau. Les sessions de jeu communiquent via le protocole TCP.",
  gif:Network,
  repo_link:"https://github.com/Levrairagazzo/CheckerMultiplayerJava",
},
{
  title: "React NBA Memory Game",
  french_title: "NBA Memory React.js",
  description : "This web application is a Memory game made with NBA players of the 2000s. The user has to click on a player's photo every photo can only be cliked once. \n \
  The player cards get shuffled everytime the user clicks on a new card.",
  techstack:"Javascript, HTML, CSS, React.js ",
  french_description: "Cette application web est un jeu de memory réalisé avec des joueurs de la NBA des années 2000. L'utilisateur doit cliquer sur la photo d'un joueur et chaque photo ne peut être cliquée qu'une seule fois. Les cartes de joueurs sont mélangées à chaque fois que l'utilisateur clique sur une nouvelle carte.",
  gif:React_Memory,
  repo_link: "https://github.com/Levrairagazzo/memory-card-react",
  
},

{
  title: "JavaScript Library App",
  french_title: "Bibliothèque intéractive",
  description : "Web application built with Javascript that allows the user to create and delete book entries into a digital library.",
  techstack:"Javascript, HTML, CSS",
  french_description:"Bibliothèque intéractive offrant à ses utilisateurs la possibilité de supprimer des livres du catalogue et d'en ajouter de nouveau à l'aide d'un formulaire. L'app est réalisée en suivant le paradigme orienté objet en JavaScript",
  gif:Library,
  repo_link: "https://github.com/Levrairagazzo/MyLibrary",
  
}
,
{
  title: "Mern Workout Tracker",
  french_title: "Suivi d'entrainement",
  description : "Full-stack application made to track a workout. The app support CRUD operations utilizing a RESTful API to perform HTTP requests using the JSON format.",
  techstack:"Javascript, HTML, CSS, MongoDB, Express, React.js, Node.js",
  french_description: "Application Full-stack de suivi d'entrainement sportif. L'application prend en charge les opérations CRUD en utilisant une REST API et effectue des requêtes HTTP à l'aide du format JSON.",
  gif:Mern,
  repo_link: "https://github.com/Levrairagazzo/Workout-App",
},
]




function Projects() {
  return (
    <>
      <Nav/>
        <ul className='bg-slate-50 text-center p-10 min-h-screen flex flex-wrap place-content-center font-Roboto py-20 md:py-50 z-1'>
          {
            projects.map((project) => (
              <li key={project.title}className='md:w-1/3  bg-slate-100 drop-shadow-lg m-4'><Project project_info={project}/></li>
            ))
          }
        </ul>
        <Footer/>
    </>
  )
}

export default Projects