import './App.scss';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import {Footer} from './pages/Footer';
import { useEffect } from 'react';

import Contact from './pages/Contact';




export default function App () {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

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
