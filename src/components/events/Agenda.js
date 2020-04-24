import React, { useState } from 'react';
import './Events.css'
import Collapse from 'react-bootstrap/Collapse'
import { Button } from 'react-bootstrap';

const events = [
    {
      "name": "Close approach of the Moon and Mars",
      "date": new Date("2020-02-18"),
      "description": "The Moon and Mars will make a close approach, passing within 0°45' of each other. The Moon will be 25 days old.",
      "image": "https://in-the-sky.org/image.php?style=icon&img=imagedump/conjunctions/conjunctions.jpg",
      "category" : "Planets",
      "visibility" : "Visible"
    },
    {
        "name": "Close approach of the Moon and Jupiter",
        "date": new Date("2020-02-19"),
        "description": "The Moon and Jupiter will make a close approach, passing within 0°55' of each other. The Moon will be 26 days old.",
        "image": "https://in-the-sky.org/image.php?style=icon&img=imagedump/conjunctions/conjunctions.jpg",
        "category" : "Planets",
        "visibility" : "Visible with telescope"
      },
      {
        "name": "Close approach of the Moon and Saturn",
        "date": new Date("2020-02-20"),
        "description": "The Moon and Saturn will make a close approach, passing within 1°44' of each other. The Moon will be 27 days old.",
        "image": "https://in-the-sky.org/image.php?style=icon&img=imagedump/conjunctions/conjunctions.jpg",
        "category" : "Planets",
        "visibility" : "Not visible"
      },
      {
        "name": "Close approach of the Moon and Saturn",
        "date": new Date("2020-02-20"),
        "description": "The Moon and Saturn will make a close approach, passing within 1°44' of each other. The Moon will be 27 days old.",
        "image": "https://in-the-sky.org/image.php?style=icon&img=imagedump/conjunctions/conjunctions.jpg",
        "category" : "Planets",
        "visibility" : "Not visible"
      },
  ];

  function Example() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <div className="row row-calendar">
          {events.map(event => ( 
              <div className="card col-3 card-size font-size" key={event.id} >
                <div className="card-date text-center headings-size">                  
                    <h2>{event.date.getUTCDate()}  |  
                        {(() => {
                            switch (event.date.getMonth()) {
                                case 0: return "JANUARY";
                                case 1: return "FEBRUARY";
                                case 2: return "MARCH";
                                case 3: return "APRIL";
                                case 4: return "MAY";
                                case 5: return "JUNE";
                                case 6: return "JULY";
                                case 7: return "AUGUST";
                                case 8: return "SEPTEMBER";
                                case 9: return "OCTOBER";
                                case 10: return "NOVEMBER";
                                case 11: return "DECEMBER";
                                default: return "MONTH";
                            }
                        })()}  |  
                        {event.date.getUTCFullYear()}
                    </h2>
                </div>
                <div className="text-center d-inline">                    
                    <div className="d-inline headings-size heading-img">
                        <img src={event.image} alt=""/>
                        <h2 className="mt-3">{event.name}</h2>
                    </div>
                    <div>
                        <Button
                            className="btn btn-dark buttn"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            >
                            More Info
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <div className="" key={event.id} >                
                                    <div className="text-center d-inline">                  
                                        <div>
                                            <div className="headings-size" id="myDIV" >
                                                <h3>{event.description}</h3>
                                                <h3><b>Type of visibility :</b> {event.visibility}</h3>
                                                <h3><b>Category:</b> {event.category}</h3>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div> 
                </div>
            </div>
            ))} 
        </div>
        
      </>
    );
  }
const AgendaCalendar = () => {
    return(
    <div>
        <Example/>
    </div>     
    )  
}

export default AgendaCalendar




