import React, { Component } from 'react';
import './Events.css'

class EventsList extends Component {

    constructor(props) {
    super(props);
    this.state = {
      events: [],
      date: new Date(),
      showing: true,
      
    };
  }
  

  componentDidMount() {
    fetch('https://astro-little-taurus.herokuapp.com/events')
      .then(res => res.json())
      .then(result => {
        this.setState({
          events: result,
          date: result.date,
        });
      });
  }
  
  render() {
    const { events } = this.state;
    const { showing } = this.state;
      return (
       
        <div>
            <div className="row row-calendar">
              {events.map(event => (                
                  <div className="card col-3 card-size font-size" key={event.id} >
                      <div className="card-date text-center headings-size">
                        <h2>{event.date}</h2>
                      </div>
                    <div className="text-center d-inline">                    
                      <div className="d-inline headings-size heading-img">
                        <img src={event.image} alt=""/>
                        <h2 className="mt-3">{event.name}</h2>
                      </div>
                      <div>
                        <button className="btn btn-dark buttn" onClick={() => this.setState({ showing: !showing })}>More info</button>
                        { !showing 
                            ? <div className="headings-size">
                                <h3>{event.description}</h3>
                                <h3>Type of visibility : {event.visibility}</h3>
                                <h3>Category: {event.category}</h3>
                            </div>
                            : null
                        }
                      </div>  
                    </div>
                  </div>
              ))} 
            </div>
        </div>  
      );    
     }
   }
  
  export default EventsList;