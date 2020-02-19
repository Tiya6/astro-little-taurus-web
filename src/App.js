import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/misc/Navbar';
import Login from './components/users/Login'



function App() {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/login" component={Login}/>
    </div>
  );
}

export default App;
