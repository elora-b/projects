import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Contact from './components/Contact'
import List from './components/List'


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <div className="container">
          <List />
        </div>
      </div>
    );
  } 
}

export default App;
