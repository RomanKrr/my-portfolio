import React from 'react'
import AOS from 'aos';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import MyStory from './components/MyStory/MyStory';
import SocialBar from './components/SocialBar/SocialBar';
import ScrollProgressBar from './components/ScrollProgressBar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

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
    </div>
  );
}

export default App;
