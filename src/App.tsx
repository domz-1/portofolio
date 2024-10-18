import './App.scss';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import {Footer} from './pages/Footer';

import Contact from './pages/Contact';




export default function App () {

return (
    <div className="App">
    <NavBar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
);
}
