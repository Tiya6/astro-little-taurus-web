/*import React, { Component } from 'react'
import './Calendar.css'

import SimpleReactCalendar from 'simple-react-calendar'
 
class Calendar extends Component {
  render() {
    return <SimpleReactCalendar activeMonth={new Date()} />
  }
}


export default Calendar*/


import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}


export default Calendar