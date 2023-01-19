import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import RouterComponent from './components/RouterComponent';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </>
  
     
  );
}

export default App;
