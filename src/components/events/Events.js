import React, { Component } from 'react';

class EventsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            description: '',
            category: '', 
            visibility: '',
            image: '',
            
        };
      }

      componentDidMount() {
        fetch('https://www.mlab.com/databases/heroku_64dmrqgs/collections/events')
        .then((response) => response.json()) 
        .then((responseData) => { 
           console.log(responseData);
            this.setState({
              name: responseData.name,
              date: responseData.date,
              description: responseData.description,
              category: responseData.category,
              visibility: responseData.visibility,
              image: responseData.image 
            }); 
        });
      }

        
    render() {
        return (
        <div className="card-picture mt-4">
            name: {this.state.name}
                              
        </div>

        );
      }y
    }

  
  export default EventsList;