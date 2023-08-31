// import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div >
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
 
      
      </div>
      
  )   
}

export default App;
