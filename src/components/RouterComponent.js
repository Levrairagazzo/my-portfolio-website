import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';

function RouterComponent() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' component={<Home/>} />
            <Route path='/about' component={<About/>} />
            <Route path='/projects' component={<Projects/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent