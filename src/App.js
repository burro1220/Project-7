import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import apiKey from './config';

//components
import Header from './components/Header';
import Home from './components/Home';
import PhotoContainer from './components/PhotoContainer';
import Error from './components/Error';


const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=michael+jordan&format=json&nojsoncallback=1`;
const jordan = "michael+jordan";
const brady = "tom+brady";
const tiger = "tiger+woods";


class App extends Component {

  state = {
    jordan: [],
    woods: [],
    brady: [],
    loading: true
  }

  componentDidMount() {
    this.getInitialDataJordan();
    //going to repeat process to grab initial data for three topics
  }

  getInitialDataJordan = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=michael+jordan&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.response = response.data.data;
      //able to log the reponse
      console.log(response)
      this.setState({
        jordan: response
      })
    })    
    .catch(error => {
      console.log(`Error fetching and parsing inital data`, error);
    });
  }

  render() {
    
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/tiger" render={ () => <PhotoContainer /> } />
            <Route path="/jordan" render={ () => <PhotoContainer data={this.state.jordan} /> } />
            <Route path="/brady" render={ () => <PhotoContainer /> } />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
