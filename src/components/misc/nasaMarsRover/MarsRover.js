import React, { Component } from 'react';
import './MarsRover.css'

class MarsRover extends Component {

    constructor(props) {
    super(props);
    this.state = {
      mars: [],
    };
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=03fffsqCLmD8eAseLjqwASPRdbyLbjHqz2kj8UMA')
      .then(res => res.json())
      .then(result => {
        this.setState({
          mars: result.photos
        });
      });
  }

  render() {
    const { mars } = this.state;
    console.log({mars})
      return (
        <div className="container">
            <div className="text-center curiosity-style">
                <h1>Curiosity Rover                  
                    <a href="https://twitter.com/marscuriosity?lang=es" target="_blank">  <i className="fa fa-twitter"></i></a>
                </h1>
                <h4>|| My history ||</h4>
                    <p>The rover landed on Mars in 2012 with a primary mission to find out if Mars is, or was, suitable for life.
                    Another objective is to learn more about the Red Planet's environment. </p>
                    <p>In March 2018, it celebrated 2,000 sols (Mars days) on the planet, 
                    making its way from Gale Crater to Aeolis Mons (colloquially called Mount Sharp), 
                    where it has looked at geological information embedded in the mountain's layers. 
                    Along the way, it also has found extensive evidence of past water and geological change.</p>
            </div>
            <div className="row">
                {mars.slice(0,40).map(rover => ( 
                    <div className="col-xl" key={rover.id} >
                        
                            <div className="rover-style text-center">
                                <div>
                                <img src={rover.img_src} alt=""/>
                                </div>
                                <div className="d-inline">
                                <h3><b>Earth date = </b>{rover.earth_date}</h3>
                                <h3><b>Sol = </b>{rover.sol}</h3>
                                </div>
                            </div>
                        
                    </div>
                ))} 

            </div>
        </div>
        
      );    
     }
   }
  
export default MarsRover;