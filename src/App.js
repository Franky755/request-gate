import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import './App.css';
import Navbar from './Components/Navigation/Navbar';
import Sidebar from './Components/Navigation/Sidebar';
import WebFont from 'webfontloader';
import Header from './Components/Navigation/Header';
import UserDialog from './Components/Users/UserDialog';
import SignUp from './features/Authentic/SignUp';
import Login from './features/Authentic/Login';

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
      <Switch>
        <Route exact path='/' >
          <Login />
        </Route>

        <Route exact path='/signup' >
          <SignUp />
        </Route>

      </Switch>
      <div className='navigation-container'>
        <Navbar />
      </div>
      <div className='sidebar-body-container'>
        <Sidebar />
        <Header />
        <UserDialog />
      </div>
    </div>
  );
}

export default App;
