import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Popular from './trending/Popular';
import MyList from './myList/MyList';
import BestRatedC from './bestRated/BestRatedC'
import AnimeDetail from './animeDetail/AnimeDetail'
import HeaderC from './header/HeaderC'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router> 
          <HeaderC />
            <Route path="/" exact strict render={
                  () => {
                    return (<Popular/>)
                  }
                }/>
                <Route path="/best-rated" exact strict render={
                  () => {
                    return (<BestRatedC/>)
                  }
                }/>
                <Route path="/recent" exact strict render={
                  () => {
                    return (<Popular/>)
                  }
                }/>
                <Route path="/my-list" exact strict render={
                  () => {
                    return (<MyList/>)
                  }
                }/>
                <Route path="/anime-detail/:id">
                  <AnimeDetail />
                </Route>
              </Router>
            </React.Fragment>
          );
        }
      }
      
export default App;
