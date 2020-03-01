import React, { Component } from 'react';
import './TodaysPicture.css'

class TodaysPicture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            title: '',
            explanation: '', 
            imgurl: '',
            
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
              imgurl: responseData.url 
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
            <div className="col-5 mt-3 ml-4">
              <img src={this.state.imgurl} alt=""/>
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
      }y
    }

  
  export default TodaysPicture;