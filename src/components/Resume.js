import resume from "../assets/SWE-SydneyG.pdf"
import Footer from "./Footer";
import Nav from './Nav';

const Resume = () => {
    return ( <>
    <Nav/>
     <iframe src={resume} className="min-h-screen min-w-full">
    </iframe>
    <Footer/>

    </> );
}
 
export default Resume;