import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const home = () => { 
    return(
    <div className="wrapper">
      <div className="outerDiv1">
        <div className="innerDiv1">
          <div className="row explore">
            <div className="card card-text-home-two col-md-3">
              <div className="center">
                <img src={require('../images/nasa.png')} alt="" className="img-size"/>                
              </div>
              <Link to='/todayspicture' className="link-hover">
                PICTURE OF THE DAY
              </Link>
            </div>
            <div className="card card-text-home-two col-md-3">
              <div className="center">
                <img src={require('../images/rocket.png')} alt="" className="img-rocket"/>                
              </div>
              <Link to='/spacelaunch' className="link-hover">
                UPCOMING SPACE LAUNCH
              </Link>
            </div>
            <div className="card card-text-home-three col-md-6 bg-gallery-home">
               <Link to='/nasaimages' className="link-hover txt-gallery-home">
                 GALLERY
              </Link>
            </div>
          </div>
          <div className="row explore">
            <div className="card card-text-home-two col-md-3">
              <div className="center">
                <img src={require('../images/curiosity.png')} alt="" className="img-size"/>                
              </div>
              <Link to='/marsrover' className="link-hover">
                MARS ROVER CURIOSITY
              </Link>
            </div>
              <div className="card card-text-home-two col-md-3">
                <div className="center">
                  <img src={require('../images/wiki.png')} alt="" className="img-size"/>                
                </div>
                <Link to='/wiki' className="link-hover">
                  Wiki
                </Link>
              </div>
          </div>          
        </div>
      </div>
    </div>
    
    )
}

  
  export default home;