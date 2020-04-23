import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import './SpaceLaunch.css'

class SpaceLaunch extends Component {

    constructor(props) {
    super(props);
    this.state = {
      spacelaunch: [],
    };
  }

  componentDidMount() {
    fetch('https://spacelaunchnow.me/api/3.3.0/event/upcoming?api_key=03fffsqCLmD8eAseLjqwASPRdbyLbjHqz2kj8UMA')
      .then(res => res.json())
      .then(response => {
        this.setState({
          spacelaunch: response.results
        });
      });
  }

  render() {
    const { spacelaunch } = this.state;
    console.log({spacelaunch})
      return (
        <div className="text-center space-launch-heading">
        <h1>UPCOMING SPACE LAUNCHES</h1>
        {spacelaunch.map(launch => ( 
            <div  className="container container-space-launch">

                <div className="card card-space-launch flex-row flex-wrap" key={launch.id} >  

                    <div className="card-header border-0 img-style align-self-center">
                            <img src={launch.feature_image} className="spacelaunch-img" alt=""/>
                    </div>

                    <div className="card-block px-2 launch-style text-center">
                      <h2 className="card-title">{launch.date} || {launch.name}</h2>
                      <p className="card-text launch-description"><b>What is going to happen?</b></p>
                      <p className="card-text launch-bottom">{launch.description}</p>
                      <h3 className="card-title launch-bottom"><b>Location</b> | {launch.location} |</h3>
                      <h3 className="card-title launch-bottom">
                            <a href={launch.url} target="_blank"><b>Follow the event here</b></a> ||  
                            <a href={launch.news_url} target="_blank"><b>Read the complete news</b></a>
                      </h3>

                    </div>
                  
                </div>
                
            </div>
            ))} 
        </div>
        
        
      );    
     }
   }

  
  export default SpaceLaunch;

