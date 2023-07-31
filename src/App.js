import React from 'react';
import './styled/App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
/* import Service from './components/Service/Service_old'; */
import Footer from './components/Footer/Footer';
import Platform from './components/Platform/Platform';

const App = () => {

  return (
    <div className='app-wrap'>
      <Header/>
      <Home />
      <About />
      <Platform/>
      <Service/>
      <Footer />
    </div>
  );
};

export default App;
