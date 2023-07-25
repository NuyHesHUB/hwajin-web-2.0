import './styled/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
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
                    <Route path="/service" element={<Service/>} />
                    <Route path="/partnership" element={<Partnership/>} />
                </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
