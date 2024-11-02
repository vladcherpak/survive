import './App.css'
import Features from './components/Features';
import Feedbacks from './components/Feedbacks';
import Footer from './components/Footer';
import Hero from './components/Hero'
import Slider from './components/Slider';
import Rightslider from './components/Slider/Rightslider';
import SystemRequirements from './components/SystemRequirements';
import bg from "./static/bgimage1.jpg";

function App() {


  return (
    <>
     <Hero />
     <Slider/>
    <Features/>
    <SystemRequirements/>
    <Feedbacks/>
    <Footer/>

    </>
  )
}

export default App
