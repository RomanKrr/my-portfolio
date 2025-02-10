import React from 'react'
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import MyStory from './components/MyStory/MyStory';
import SocialBar from './components/SocialBar/SocialBar';
import ScrollProgressBar from './components/ScrollProgressBar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Form from './components/Form/Form';
import MyForm from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <MyStory />
      <SocialBar />
      <ScrollProgressBar/>
      <Skills/>
      <Projects/>
      <MyForm/>
      <Footer/>
    </div>
  );
}

export default App;
