import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Friends from './components/pages/Friends'
import Trending from './components/pages/Trending'
import SignUp from './components/pages/SignUp'
import Footer from './components/Footer'



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/friends' exact element={<Friends/>}></Route>
      <Route path='/trending' exact element={<Trending/>}></Route>
      <Route path='/sign-up' exact element={<SignUp/>}></Route>

    </Routes>
    <Footer/>
    </Router>
      
      </>
  );
}

export default App;
