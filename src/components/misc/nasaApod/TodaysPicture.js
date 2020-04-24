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
            media_type:'',
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
              media_type: responseData.media_type,
              url: responseData.url
            }); 
        });
    }  

    render() {

      if( this.state.media_type === 'image'){
        this.urlFinal = this.state.url;
      }
      else {

      let urlState = this.state.url;
      
      function youtube_parser(urlVar){
        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = urlVar.match(regExp);
        return (match&&match[7].length===11)? match[7] : false;
      }

      let urlSettled=youtube_parser(urlState)

      this.urlFinal = 'https://www.youtube.com/embed/'+urlSettled+'?rel=0';
      //this.urlFinal = 'https://player.vimeo.com/video/11386048#t=0m58s?color=8BA0FF&portrait=0'
      }
      
      return (        
        <div className="card-picture mt-4">

          <div className="text-center header-apod">
            <h4 className="">NASA'S PICTURE OF THE DAY</h4> 
            <p className=""><b>{this.state.date}</b></p>
          </div>

            <div className="row">

                <div className="col-5 mt-3 ml-5 imge">
                  {(() => {
                  switch (this.state.media_type) {
                    case "image": return <img src={this.urlFinal} alt=""/>;
                    case "video": return <ReactPlayer url={this.urlFinal} width='80%' height='80%' playing/>;
                  }
                  })()} 
                </div>

                <div className="col-2"></div>

                <div className="text-center col-4 mt-5">
                  <h5 className="mb-3">{this.state.title}</h5>
                  <div className="border"></div>
                  <p className="paragr pt-3 mt-5">Explanation: {this.state.explanation}</p>
                </div> 

            </div>  
                              
        </div>

        );
      }
    }
  
export default TodaysPicture;