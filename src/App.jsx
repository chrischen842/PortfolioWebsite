import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import './app.scss'
import { useState } from "react";

function App()
{
  const[openMenu, setOpenMenu] = useState(false)
  return(
    <div className = "app">
      <Topbar openMenu = {openMenu} setOpenMenu = {setOpenMenu}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
