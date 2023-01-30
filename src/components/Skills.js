import js from '../assets/skills/javascript.svg'
import css from "../assets/skills/css3.svg";
import git from "../assets/skills/git-icon.svg";
import html from "../assets/skills/html5.svg";
import linux from "../assets/skills/linux-tux.svg";
import node from "../assets/skills/nodejs.svg";
import npm from "../assets/skills/npm.svg";
import react from "../assets/skills/react.svg";
import vsCode from "../assets/skills/vs-code.svg";
import webpack from "../assets/skills/webpack.svg";
import python from "../assets/skills/python-icon.svg";
import java from "../assets/skills/java.svg";



const Skills = () => {
  const languages = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "Javascript", img: js },
  {name: "Java", img : java},
  {python:"Python", img : python}];
   
  const otherTools =  [
    { name: "Linux CLI", img: linux },
    { name: "Git", img: git },
    { name: "webpack", img: webpack },
    { name: "VS Code", img: vsCode },
    { name: "npm", img: npm },
    { name: "ReactJS", img: react },
    { name: "nodeJS", img: node },
  ]

  const displaySVG = (icons) => {
      return icons.map((icon, index) => {
        return <img src={icon.img} alt={icons.name} title= {icons.name} key={index} className="w-10 h-10 mx-auto md:mx-4"/>
        
      });
  } 





  return ( <div className='flex flex-col w-full'>
  <h1 className=' w-full font-Roboto text-4xl font-extrabold border-b-4 border-black mt-8'> My skills</h1>
  <ul>
    <li> <h2 className='font-Robot text-xl place-content-center mt-8'>Languages:</h2>
      <div className='flex flex-wrap pt-6'>
        {displaySVG(languages)}
      </div>
    </li>
    <li>
      <h2 className='font-Robot text-xl place-content-center mt-8'>Frameworks and tools:</h2>
      <div className='flex flex-wrap pt-6'>
        {displaySVG(otherTools)}
      </div>
      
    </li>
  </ul>
 

  
  </div> );
}
 
export default Skills;