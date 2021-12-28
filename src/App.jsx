import './app.scss'
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import Portfolio from './components/portfolio/Portfolio';

import { useState } from "react";

function App()
{
  const[openMenu, setOpenMenu] = useState(false)
  return(
    <div className = "app">
      <Topbar openMenu = {openMenu} setOpenMenu = {setOpenMenu}/>
      <Menu openMenu = {openMenu} setOpenMenu = {setOpenMenu}/>
        <div className="sections">
          <Intro/>
          <AboutMe/>
          <Works/>
          <Portfolio/>
          {/* <Resume/> */}
          {/* <Contact/> */}
        </div>
    </div>
  );
}

export default App;
