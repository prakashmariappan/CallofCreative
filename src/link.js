import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landingpage from "./components/landingpage";
import Background from './components/background';
import Dashboard from './components/dashboardpage';
import Selectlevelpage from './components/selectlevelpage';
import Howtoplay from './components/howtoplay';
import About from './components/about';
import Profile from './components/profile';
import Level1 from './components/levels/level1';
import Level2 from './components/levels/level2';
import Level3 from './components/levels/level3';
import Level4 from './components/levels/level4'; 
import Level5 from './components/levels/level5';
import Level6 from './components/levels/level6';
import Level7 from './components/levels/level7';
import Level8 from './components/levels/level8';
import ContentBox from './components/levels/level1message';

const Link = () => {
    return (
        <>
        <Background/>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Landingpage/>} exact/>
        <Route path='/Dashboard' element={<Dashboard/>} exact/>
        <Route path='/Dashboard/SelectLevel' element={<Selectlevelpage/>} exact/>
        <Route path='/Dashboard/HowtoPlay' element={<Howtoplay/>} exact/>
        <Route path='/Dashboard/About' element={<About/>} exact/>
        <Route path='/Dashboard/Profile' element={<Profile/>} exact/>
        <Route path='/Dashboard/Level1' element={<ContentBox/>} exact/>
        <Route path='/Dashboard/Level2' element={<Level4/>} exact/>
        <Route path='/Dashboard/Level3' element={<Level2/>} exact/>
        <Route path='/Dashboard/Level4' element={<Level3/>} exact/>
        <Route path='/Dashboard/Level5' element={<Level5/>} exact/>
        <Route path='/Dashboard/Level6' element={<Level6/>} exact/>
        <Route path='/Dashboard/Level7' element={<Level7/>} exact/>
        <Route path='/Dashboard/Level8' element={<Level8/>} exact/>
        <Route path='/Dashboard/Level1/Window' element={<Level1/>} exact/>
        </Routes>
        </BrowserRouter>    
        </>
    );
}

export default Link;