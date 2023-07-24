import './styled/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service1 from './components/Service/Sevice1';
import Service2 from './components/Service/Sevice2';
import Service3 from './components/Service/Sevice3';
import Partnership from './components/Partnership/Partnership';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='app-wrap'>
        <Router>
            <Header/> 
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/service1" element={<Service1/>} />
                    <Route path="/service2" element={<Service2/>} />
                    <Route path="/service3" element={<Service3/>} />
                    <Route path="/partnership" element={<Partnership/>} />
                </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
