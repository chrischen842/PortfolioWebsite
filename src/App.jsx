import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import './app.scss'

function App()
{
  return(
    <div className = "app">
      <Topbar/>
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
