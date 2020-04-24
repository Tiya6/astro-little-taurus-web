import React from 'react';

/*const Tables = ({ droplets }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Region</th>
          <th>Memory</th>
          <th>CPUs</th>
          <th>Disk Size</th>
        </tr>
      </thead>
      <tbody>
        { (droplets.length > 0) ? droplets.map( (droplet, index) => {
           return (
            <tr key={ index }>
              <td>{ droplet.id }</td>
              <td>{ droplet.name }</td>
              <td>{ droplet.region.slug}</td>
              <td>{ droplet.memory }</td>
              <td>{ droplet.vcpus }</td>
              <td>{ droplet.disk }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}


export default Tables*/

import Weather from '../weather/Weather';
import EventsList from './Events';
import './Events.css'

const Agenda = () => {
  return (
    <div className="container cont-calendar text-center">

          <div className="header">
            <h1>AGENDA</h1>
          </div>
          <div className="header">
            <h2>APRIL</h2>
          </div>

      <div className="row">

          <div className="col-8 calend-style">

            <EventsList/>

          </div>        

          <div className="col-4">

            <Weather/>
          
          </div>

      </div>

    </div>
  );
}


export default Agenda