import Navbar from "../Navbar";
import Footer from "./Footer";
import Skills from "./Skills";
import Syd_restau from "../assets/Sydney_Restaurant.jpeg"

const About = () => {
    return ( <div className="">
            <Navbar/>
            
            <ul className="bg-slate-50  flex-col  px-6 md:px-36 py-10 min-h-screen leading-loose text-lg text-slate-700">
            <li className="flex place-content-center">
            <h1 className=" font-Roboto text-5xl font-extrabold text-slate-800">About me </h1>
                
            </li>
            <li className="flex place-content-center">
                <img src={Syd_restau} alt="picute of myself" className=" rounded-full w-80 h-80 object-fil my-8 shadow-2xl">
                </img>
            </li>
            <li className="flex flex-col">
            <h1 className=' w-full font-Roboto text-4xl font-extrabold border-b-4 border-slate-800 text-slate-800'> My story</h1>
            <p className=" text-justify w-full mt-8">

Before attending Berkeley City College, I earned my Master’s degree in France with a year abroad at Ball State University in Indiana. After obtaining this degree, I worked for Accenture Operations in Dublin, Ireland, where I provided technical support to Facebook users. In this position, I learned the delicacy of data policies and user safety, as well as the complexity and inner workings of multinational social medias and networks. I quickly began to learn about technology and coding, and eventually learned coding basics on Codecademy, before deciding to move to Silicon Valley to pursue my goal of becoming a software developer and engineer. Ever since I have been working towards this goal with passion and intensity. 

            </p>
            <p className=" text-justify w-full mt-8">As a Software Engineer with experience in a range of programming languages including Java, Javascript, and Python, I am skilled in both front-end and back-end development. I am seeking a junior role where I can continue to grow and develop my skills while making meaningful contributions to the team.
            In my past experience, I have worked on various projects and have consistently delivered high-quality code on time. I am constantly seeking to learn new technologies and am always eager to take on new challenges.
            </p>
            <p className=" text-justify w-full mt-8"> My work can be found on my GitHub repository at<a href="https://github.com/Levrairagazzo" rel="noreferrer" target="_blank" className=" text-teal-500 "> https://github.com/Levrairagazzo</a>.
            I am a team player and have had the opportunity to live in four different countries, which has given me a unique perspective and the ability to adapt to new environments quickly. I am excited to connect with other professionals in the tech industry and am open to new opportunities.
            </p>
            </li>
            <li className="flex place-content-center flex-col" >
                <Skills/>

            </li>
            <li className="flex flex-col " >
            <h1 className=' w-full font-Roboto text-4xl font-extrabold border-b-4 border-slate-800 mt-8 text-slate-800'> Interesting facts about me</h1>
            <ul className="mt-6">
                <li> * I'm an avid runner, I already ran 3 half-marathons and I'm now training for the Oakland Marathon. My goal is to run the 26.2 miles in less than 4 hours.</li>
                <li> * I enjoy learning languages, I speak French and English fluently and I'm currently learning Italian and Spanish</li>
                <li> * I'm based in Oakland, CA but I'm originally from France and also have lived in the UK and Ireland.</li>
            </ul>
            </li>
          </ul>
            <Footer/>
            </div>
           

     );
}
 
export default About;

