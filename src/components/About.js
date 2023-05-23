import Nav from "./Nav";
import Footer from "./Footer";
import Skills from "./Skills";
import Syd_restau from "../assets/Sydney_Restaurant.jpeg"
import { UserContext } from "../App";
import { useContext } from "react";

const About = () => {
    const {french} = useContext(UserContext);
    return ( <div className="">
            <Nav/>
            
            <ul className="bg-slate-50  flex-col  px-6 md:px-36 pt-10 md:pt-30 min-h-screen leading-loose text-lg text-slate-700">
            <li className="flex place-content-center">
            <h1 className=" font-Roboto text-5xl font-extrabold text-slate-800">{french && "À propos de moi"}{!french && "About me" }</h1>
                
            </li>
            <li className="flex place-content-center">
                <img src={Syd_restau} alt="picute of myself" className=" rounded-full w-80 h-80 object-fil my-8 shadow-2xl">
                </img>
            </li>
            <li className="flex flex-col">
            <h1 className=' w-full font-Roboto text-4xl font-extrabold border-b-4 border-slate-800 text-slate-800'> {french && "Mon parcours"}{!french && "My story" }</h1>
            <p className=" text-justify w-full mt-8">

            {!french && "Before attending Berkeley City College, I earned my Master’s degree in France with a year abroad at Ball State University in Indiana. After obtaining this degree, I worked for Accenture Operations in Dublin, Ireland, where I provided technical support to Facebook users. In this position, I learned the delicacy of data policies and user safety, as well as the complexity and inner workings of multinational social medias and networks. I quickly began to learn about technology and coding, and eventually learned coding basics on Codecademy, before deciding to move to Silicon Valley to pursue my goal of becoming a software developer and engineer. Ever since I have been working towards this goal with passion and intensity."
            }
            {
                french && "Avant de partir étudier l’informatique à Berkeley City College, j'ai obtenu mon diplôme de Master en France incluant une année d'études à Ball State University à Muncie-USA. Après avoir obtenu ce diplôme, j'ai travaillé pour Accenture Operations à Dublin-Irlande, où j'ai exercé l’activité de consultant en service clients pour le compte de Facebook. Dans ce poste, j'ai élargi mes connaissances en termes de politiques de protection des données et de sécurité des utilisateurs. J'y ai acquis des connaissances sur le fonctionnement interne des réseaux sociaux et des grandes entreprises multinationales. Cette exposition au monde de la tech a beaucoup attisé ma curiosité vis-a-vis de l’informatique et plus particulièrement de la programmation. J’ai alors débuté l’apprentissage des bases de la programmation de façon autodidacte sur le site Codecademy, avant de prendre la decision de m’expatrier dans la Silicon Valley “au coeur du réacteur” pour réaliser mon objectif de devenir développeur/ingénieur logiciel."
            }

            </p>
            <p className=" text-justify w-full mt-8">
            {!french && "As a Software Engineer with experience in a range of programming languages including Java, Javascript, and Python, I am skilled in both front-end and back-end development. I am seeking a junior role where I can continue to grow and develop my skills while making meaningful contributions to the team.In my past experience, I have worked on various projects and have consistently delivered high-quality code on time. I am constantly seeking to learn new technologies and am always eager to take on new challenges."}
            </p>
            {!french && <p className=" text-justify w-full mt-8"> My work can be found on my GitHub repository at<a href="https://github.com/Levrairagazzo" rel="noreferrer" target="_blank" className=" text-teal-500 "> https://github.com/Levrairagazzo</a>.
            I am a team player and have had the opportunity to live in four different countries, which has given me a unique perspective and the ability to adapt to new environments quickly. I am excited to connect with other professionals in the tech industry and am open to new opportunities.
            </p>}
            {french && <p className=" text-justify w-full mt-2">Je vous invite à consulter mon <a href="https://github.com/Levrairagazzo" rel="noreferrer" target="_blank" className=" text-teal-500 "> GitHub</a>. pour découvrir mon travail et vous faire une idée de mes compétences techniques.
            </p>}
            </li>
            <li className="flex place-content-center flex-col" >
                <Skills/>

            </li>
            <li className="flex flex-col " >
            <h1 className=' w-full font-Roboto text-4xl font-extrabold border-b-4 border-slate-800 mt-8 text-slate-800'> {french && "En dehors de l'informatique"}{!french && "Interesting facts about me" }</h1>
            <ul className="mt-6 pb-10">
                {!french && <> 
                <li> * I'm an avid runner, I already ran 3 half-marathons and one full marathon. My current is to run a second marathon this fall.</li>
                <li> * I enjoy learning languages, I speak French and English fluently and I'm currently learning Italian and Spanish.</li>
                <li> * I'm based in my hometown of Nancy, France but my career and studies lead me to live in three different countries(UK, Irland, US) over the past 6 years.</li>
                </>}
                {french && <> 
                <li> * Passioné de course à pied, j'ai courru mon premier Marathon au mois de Mars 2023 en 3h58. Mon prochain objectif est de courir un deuxième marathon cet automne.</li>
                <li> * J'aime beaucoup me confronter à la découverte d’autres cultures et à l’apprentissage de nouvelles langues, en plus du français, je parle couramment l’anglais et j'apprends actuellement l'italien et l'espagnol.</li>
                <li> * Je suis désormais installé en France, pourtant mes études et ma carrière professionelle m’ont durant ces 6 dernières années amené à vivre dans trois pays étrangers (Angleterre, Irlande, Etats-Unis).</li>
                </>}
            </ul>
            </li>
          </ul>
            <Footer/>
            </div>
           

     );
}
 
export default About;

