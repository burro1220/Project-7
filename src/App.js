import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import apiKey from './config';

//components
import Header from './components/Header';
import Home from './components/Home';
import PhotoContainer from './components/PhotoContainer';
import SearchContainer from './components/SearchContainer'
import Error from './components/Error';


class App extends Component {

  state = {
    jordan: [],
    woods: [],
    brady: [],
    photos:[],
    loading: true  
  }

  componentDidMount() {
    this.getInitialDataJordan();
    this.getInitialDataWoods();
    this.getInitialDataBrady();
    
  }

  performSearch = (query) => {
    this.setState({ loading: true });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.response = response.data.photos.photo;
        this.setState({
          photos: this.response,
          loading: false
        });
        
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  getInitialDataJordan = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=michael+jordan&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.response = response.data.photos.photo;
      this.setState({
        jordan: this.response
      })
    })    
    .catch(error => {
      console.log(`Error fetching and parsing inital Jordan data`, error);
    });
  }

  getInitialDataWoods = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=tiger+woods&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.response = response.data.photos.photo;
      this.setState({
        woods: this.response
      })
    })    
    .catch(error => {
      console.log(`Error fetching and parsing inital Tiger data`, error);
    });
  }

  getInitialDataBrady = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=tom+brady&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.response = response.data.photos.photo;
      this.setState({
        brady: this.response
      })
    })    
    .catch(error => {
      console.log(`Error fetching and parsing inital Brady data`, error);
    });
  }

  render() {
    
    return (
      <BrowserRouter>
        <div className="container">
          <Header onSubmit={this.performSearch} data={this.state.photos}/>
          <Switch >
            <Route exact path="/" render= { () => {
              if(this.state.photos.length > 0) {
                return <Redirect to="/search" />
              } else return <Home onSubmit={this.performSearch}/>
            }} />
            
            <Route path="/tiger" render={ () => <PhotoContainer title={"Tiger Woods"} data={this.state.woods}/> } />
            <Route path="/jordan" render={ () => <PhotoContainer title={"Michael Jordan"} data={this.state.jordan} /> } />
            <Route path="/brady" render={ () => <PhotoContainer title={"Tom Brady"} data={this.state.brady}/> } />
            <Route path="/search" render={ () => <SearchContainer title={"Search Results"} loading = {this.state.loading} data={this.state.photos} onSubmit={this.performSearch} /> } />
            <Route component={Error} />
            
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
