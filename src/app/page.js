import Navbar from './js/Navbar';
import TechStack from './js/TechStack';
import Experiences from './js/Experiences';
import Projects from './js/Projects';
import Home from './js/Home';
import About from './js/About';


export default function App({ Component, pageProps }) {
  return (
    <div className="relative">
      <Navbar/>
      <div className="relative pt-16">
        {/* Home */}
        <Home/>

        {/* About */}
        <About/>

        {/* Tech Stack*/}
        <TechStack/>

        {/* Experience*/}
        <Experiences/>

        {/* Projects */}
        <Projects/>

      </div>
    </div>
  );
}
