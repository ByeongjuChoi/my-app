import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get('http://192.168.0.248:8080/api/v1/feed/feedSelectAll');  // API URL 수정
        setData(res.data);  // data 상태 업데이트
      } catch(error) {
        console.log('Error data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
         <Routes>
            <Route  path="/" element={ <Home />} />
            <Route  path="/menu" element={ <Menu />} />
            <Route  path="/about" element={ <About />} />
            <Route  path="/contact" element={ <Contact />} />
            <Route  path="/SignUp" element={ <SignUp />} />
            <Route  path="/Login" element={ <Login />} />
         </Routes>
         <Footer />
     </Router>
    </div>
  );
}

export default App;
