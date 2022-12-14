import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import WebFont from 'webfontloader';
import Header from './Components/Header';

function App() {
  //font chu
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Chilanka']
      }
    })
  }, [])


  return (
    <div className="App container">
      <div className='navigation-container'>
      <Navbar />
      </div>
      <div className='sidebar-body-container'>
        <Sidebar />
        <Header />
      </div>
    </div>
  );
}

export default App;
