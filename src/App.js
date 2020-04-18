import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/misc/navbar/Navbar';
import Login from './components/users/Login'
import Register from './components/users/Register';
import home from './components/misc/home/Home';
import Learn from './components/misc/learn/Learn';
import MeetUp from './components/misc/meetUp/MeetUp';
import TodaysPicture from './components/misc/nasaApod/TodaysPicture';
import EventsList from './components/events/Events';
import User from './components/users/UserProfile';
import Logout from './components/users/Logout';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/register" component={Register}/> 
      <Route exact path="/user" component={User}/>
      <Route exact path="/learn" component={Learn}/>
      <Route exact path="/meetup" component={MeetUp}/>
      <Route exact path="/todayspicture" component={TodaysPicture}/>
      <Route exact path="/calendar" component={EventsList}/>
      <Route exact path="/" component={home}/>
    </div>
  );
}

export default App;
