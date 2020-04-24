import React from 'react';

import Weather from '../weather/Weather';
import './Events.css'
import AgendaCalendar from './Agenda';

const Agenda = () => {
  return (
    <div className="container cont-calendar text-center">
      <div className="header">
          <div>
            <h1>AGENDA</h1>
          </div>
          <div>
            <h2>APRIL</h2>
          </div>
        </div>
      <div className="row">

          <div className="col-8 calend-style">

            <AgendaCalendar/>

          </div>        

          <div className="col-4">

            <Weather/>
          
          </div>

      </div>

    </div>
  );
}


export default Agenda