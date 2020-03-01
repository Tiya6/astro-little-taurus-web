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
            <div className="card card-text-home col-md-3">LATEST NEWS</div>
            <div className="card card-text-home-three col-md-6">COMMING SOON</div>
          </div>
          <div className="row explore">
            <div className="card card-text-home col-md-3">COMMING SOON</div>
            <div className="card card-text-home col-md-3">COMMING SOON</div>
          </div>          
        </div>
      </div>
    </div>
    
    )
}

  
  export default home;