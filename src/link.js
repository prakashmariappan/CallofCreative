import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/landingpage";
import Background from "./components/background";
import Dashboard from "./components/dashboardpage";
import Selectlevelpage from "./components/selectlevelpage";
import Howtoplay from "./components/howtoplay";
import About from "./components/about";
import Profile from "./components/profile";
import Level1 from "./components/levels/level1";
import Level2 from "./components/levels/level2";
import Level3 from "./components/levels/level3";
import Level4 from "./components/levels/level4";
import Level5 from "./components/levels/level5";
import Level6 from "./components/levels/level6";
import Level7 from "./components/levels/level7";
import Level8 from "./components/levels/level8";
import {
  ContentBox1,
  ContentBox2,
  ContentBox3,
  ContentBox4,
  ContentBox5,
  ContentBox6,
  ContentBox7,
  ContentBox8,
} from "./components/levels/message";

const Link = () => {
  return (
    <>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} exact />
          <Route path="/Dashboard" element={<Dashboard />} exact />
          <Route path="/Dashboard/SelectLevel" element={<Selectlevelpage />} exact />
          <Route path="/Dashboard/HowtoPlay" element={<Howtoplay />} exact />
          <Route path="/Dashboard/About" element={<About />} exact />
          <Route path="/Dashboard/Profile" element={<Profile />} exact />
          <Route path="/Dashboard/Level1" element={<ContentBox1 />} exact />
          <Route path="/Dashboard/Level2" element={<ContentBox2 />} exact />
          <Route path="/Dashboard/Level3" element={<ContentBox3 />} exact />
          <Route path="/Dashboard/Level4" element={<ContentBox4 />} exact />
          <Route path="/Dashboard/Level5" element={<ContentBox5 />} exact />
          <Route path="/Dashboard/Level6" element={<ContentBox6 />} exact />
          <Route path="/Dashboard/Level7" element={<ContentBox7 />} exact />
          <Route path="/Dashboard/Level8" element={<ContentBox8 />} exact />
          <Route path="/Dashboard/Level1Window" element={<Level1 />} exact />
          <Route path="/Dashboard/Level2Window" element={<Level4 />} exact />
          <Route path="/Dashboard/Level3Window" element={<Level2 />} exact />
          <Route path="/Dashboard/Level4Window" element={<Level3 />} exact />
          <Route path="/Dashboard/Level5Window" element={<Level5 />} exact />
          <Route path="/Dashboard/Level6Window" element={<Level6 />} exact />
          <Route path="/Dashboard/Level7Window" element={<Level7 />} exact />
          <Route path="/Dashboard/Level8Window" element={<Level8 />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Link;
