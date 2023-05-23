import {
    AiFillGithub,
  } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

const Project = (props) => {

  const { french } = useContext(UserContext);
  
    return (
       <>
         
         <h1 className=" font-extrabold text-2xl py-3">
            {!french && props.project_info.title}
            {french && props.project_info.french_title}
        </h1>
        <img src={props.project_info.gif}alt="screenshot of project" className=" mx-auto hover:scale-110 transition duration-300 ease-in-out "></img>
        <p className="text-justify p-4">{!french && props.project_info.description}{french && props.project_info.french_description}</p>
        <p className="text-justify p-4">{french && "Stack technique"}{!french && "Tech stach"}: {props.project_info.techstack}</p>
        <div className=" flex place-content-center  my-3  ">
        <div className="flex place-content-center cursor-pointer hover:text-teal-500 gap-3"> 

        <a href={props.project_info.repo_link} rel="noreferrer" target="_blank" className="flex gap-4 hover:scale-110 transition duration-300 ease-in-out">
          <AiFillGithub className=" mt-1"/>{french && "Voir le dépôt" }{!french && "View repository"}</a>
        </div>
        </div>
       
       </>
         );
}
 
export default Project;