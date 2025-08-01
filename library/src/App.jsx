import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';
import data from './json/Art.json';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
      <main>
        <NavBar data={data.nav}/>
        <Hero data={data.hero}/>
        <Cocktails data={data.cockails}/>
        <About data={data.about} />
        <Art data={data.art}/>
        <Menu data={data.menu}/>
        <Contact data={data.contact}/>
      </main>
    );
    }

export default App;