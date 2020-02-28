import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/misc/Navbar';
import Login from './components/users/Login'
import Register from './components/users/Register';
import home from './components/misc/Home';
import Learn from './components/misc/Learn';
import MeetUp from './components/misc/MeetUp';



function App() {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/learn" component={Learn}/>
      <Route exact path="/meetup" component={MeetUp}/>
      <Route exact path="/" component={home}/>
    </div>
  );
}

export default App;
