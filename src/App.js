import React ,{ useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
export const UserContext = React.createContext();

function App() {
  const [french, setFrench] = useState(false);

  return (
    <>
        
          <UserContext.Provider value = {{french, setFrench}}>
          <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
          </Routes>
          </UserContext.Provider>
       
    </>
  
     
  );
}

export default App;