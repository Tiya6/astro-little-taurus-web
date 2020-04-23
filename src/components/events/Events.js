import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import './Events.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class EventsList extends Component {

    constructor(props) {
    super(props);
    this.state = {
      events: [],
      showing: true,
    };
  }

  componentDidMount() {
    fetch('https://astro-little-taurus.herokuapp.com/events')
      .then(res => res.json())
      .then(result => {
        this.setState({
          events: result
        });
      });
  }
  get(){
    const { events } = this.state;
      let d = new Date({events});
      {events.map(event => ( 
        event.date.getDay()
        ))}
    } 

  render() {
    const { events } = this.state;
    const { showing } = this.state;
    console.log({events})
      return (
        /*<div>
          {events.map(event => ( 
            <div key={event.id} className="card mx-auto text-center">
              <div className="card-columns">                       
                <div className="card card-event mx-auto d-flex justify-content-center">
                
                    <div>
                      <img src={event.image} alt=""/>
                    </div>
                    <div>
                      <h2>{event.date}</h2>
                      <h2>{event.name}</h2>
                    </div>
                </div>
                <div className="card card-event mx-auto ">
                    <h3>A little description : {event.description}</h3>
                    <h3>Scale of visibility: {event.visibility}</h3>
                    <h3>Category : {event.category}</h3>
                </div>
              </div>
            </div>
          ))}          
        </div>*/
        <div className="text-center">
          <div className="header">
            <h1>AGENDA</h1>
          </div>
          <div className="header">
            <h2>APRIL</h2>
          </div>
          <div className="header">
            <h3>UPCOMING EVENTS</h3>
          </div>
            <div className="card-columns">
              {events.map(event => ( 
                  <div className="card col-12 font-size" key={event.id} >
                  <div className="card-date text-center headings-size">
                        <h2>{event.date}</h2>
                      </div>
                    <div className="text-center d-inline">                    
                      <div className="d-inline headings-size heading-img">
                        <img src={event.image} alt=""/>
                        <h2>{event.name}</h2>
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