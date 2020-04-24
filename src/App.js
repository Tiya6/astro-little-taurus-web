import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/misc/navbar/Navbar';
import Login from './components/users/Login'
import Register from './components/users/Register';
import home from './components/misc/home/Home';
import Learn from './components/misc/learn/Learn';
import MeetUp from './components/misc/meetUp/MeetUp';
import SpaceLaunch from './components/misc/nasaSppaceLaunch/SpaceLaunch';
import TodaysPicture from './components/misc/nasaApod/TodaysPicture';
import MarsRover from './components/misc/nasaMarsRover/MarsRover';
import NasaImages from './components/misc/nasaimages/NasaImages';
import EventsList from './components/events/Events';
import Agenda from './components/events/Event';
import Weather from './components/weather/Weather';
import Wiki from './components/misc/wiki/Wiki';
import User from './components/users/UserProfile';
import { AuthContextProvider } from './contexts/AuthContext';



function App() {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/logout" component={AuthContextProvider}/>
      <Route exact path="/signup" component={Register}/>
      <Route exact path="/user" component={User}/>
      <Route exact path="/learn" component={Learn}/>
      <Route exact path="/meetup" component={MeetUp}/>
      <Route exact path="/todayspicture" component={TodaysPicture}/>
      <Route exact path="/spacelaunch" component={SpaceLaunch}/>
      <Route exact path="/marsrover" component={MarsRover}/>
      <Route exact path="/nasaimages" component={NasaImages}/>
      <Route exact path="/calendar" component={Agenda}/>
      <Route exact path="/wiki" component={Wiki}/>
      <Route exact path="/" component={home}/>
    </div>
  );
}

export default App;
