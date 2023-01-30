import resume from "../assets/SG_SWE.pdf"
import Navbar from "../Navbar";
import Footer from "./Footer";

const Resume = () => {
    return ( <>
    <Navbar/>
     <iframe src={resume} className="min-h-screen min-w-full">
    </iframe>
    <Footer/>

    </> );
}
 
export default Resume;