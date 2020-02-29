import React from 'react'
import './MeetUp.css'

const MeetUp = () => {

    return (
    <div className="back">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 border">Span 5</div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 border">Span 3</div>
                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-2 border">
                    <div className="short-div border" >Span 2</div>
                    <div className="short-div border" >Span 2</div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-2 border">Span 2</div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row-fluid">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 border">
                    <div className="short-div border">Span 6</div>
                    <div className="short-div border">Span 6</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">Span 6</div>
            </div>
        </div>
    </div>
       
    )
}

export default MeetUp