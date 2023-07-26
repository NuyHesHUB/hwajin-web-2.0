import React from 'react';
import './styled/App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <div className='app-wrap'>
      <Header/>
      <Home />
      <About />
      {/* <Service/> */}
      <Footer />
    </div>
  );
};

export default App;
