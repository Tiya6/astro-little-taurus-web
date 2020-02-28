import React, { Component } from 'react';
import './Home.css'

class home extends Component {

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
        <div className="card col-4 mt-4 ml-5">
            <img src={this.state.imgurl} alt=""className="card-img-top img mt-3"/>
            <div className="card-body text-center">
                <h4 className="card-title">NASA'S PICTURE OF THE DAY</h4>
                <p className="card-text"><b>{this.state.date}</b></p>
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text paragr pt-3">Explanation: {this.state.explanation}</p>
            </div>              
        </div>
        );
      }
    }

  
  export default home;