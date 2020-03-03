import React, { Component } from 'react';
import './TodaysPicture.css'
import ReactPlayer from 'react-player';

class TodaysPicture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            title: '',
            explanation: '', 
            imgurl: '',
            url: ''
        };
      }

      componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=03fffsqCLmD8eAseLjqwASPRdbyLbjHqz2kj8UMA')
        .then((response) => response.json()) 
        .then((responseData) => { 
           console.log(responseData);
            this.setState({
              date: responseData.date,
              title: responseData.title,
              explanation: responseData.explanation,
              imgurl: responseData.url ,
              url: responseData.url
            }); 
        });
      }
      
    render() {
      
      return (
        <div className="card-picture mt-4">
          <div className="title-center">
            <h4 className="">NASA'S PICTURE OF THE DAY</h4> 
            <p className=""><b>{this.state.date}</b></p>
          </div>
          <div className="row">
            <div className="col-5 mt-3 ml-5 imge">
              <img src={this.state.imgurl} alt=""/>
              <ReactPlayer url='https://www.youtube.com/embed/Ilifg26TZrI?rel=0'   width='100%' height='100%'playing/>
            </div>
            <div className="col-2"></div>
            <div className="text-center col-4 pciture-text mt-5">
              <h5 className="mb-3">{this.state.title}</h5>
              <div className="border"></div>
              <p className="paragr pt-3 mt-5">Explanation: {this.state.explanation}</p>
            </div> 
          </div>                      
        </div>

        );
      }

      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    }

  
  export default TodaysPicture;