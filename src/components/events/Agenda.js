import React, { useState } from 'react';
import './Events.css'
import Collapse from 'react-bootstrap/Collapse'
import { Button } from 'react-bootstrap';

const events = [
    {
      "name": "New Moon",
      "date": new Date("2020-04-23"),
      "description": "The Moon will pass close to the Sun and become lost in the Sun's glare for a few days. The Moon's orbital motion carries it around the Earth once every four weeks, and as a result its phases cycle from new moon, through first quarter, full moon and last quarter, back to new moon once every 29.5 days.",
      "image": "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/new_moon.jpg",
      "category" : "Planets",
      "visibility" : "Not visible"
    },
    {
        "name": "Uranus at solar conjunction",
        "date": new Date("2020-04-26"),
        "description": "Uranus will pass very close to the Sun in the sky as its orbit carries it around the far side of the solar system from the Earth.",
        "image": "https://in-the-sky.org/image.php?style=icon&img=imagedump/outerplanets/uranus.jpg",
        "category" : "Planets",
        "visibility" : "Not visible"
      },
      {
        "name": "Venus at greatest brightness",
        "date": new Date("2020-04-28"),
        "description": "Venus will reach its greatest brightness in its 2019–2020 evening apparition. It will be shining brightly at mag -4.5.",
        "image": "https://in-the-sky.org/image.php?style=icon&img=imagedump/innerplanets/venus.jpg",
        "category" : "Planets",
        "visibility" : "Visible"
      },
      {
        "name": "Moon at First Quarter",
        "date": new Date("2020-04-30"),
        "description": "The Moon will be prominent in the evening sky, setting around midnight.",
        "image": "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/moon_at_first_quarter.jpg",
        "category" : "Planets",
        "visibility" : "Visible"
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
                                                <h3 className="pt-5"><b>Type of visibility :</b> {event.visibility}</h3>
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




