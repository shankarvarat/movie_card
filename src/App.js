import './App.css';

import { Component } from 'react';
import Header from './components/Header'
import Movies from './components/Movies';




export default class App extends Component {

  constructor() {
    super();

    this.state = {
      title: "Movie Cards Project"
    }
  }
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <div className="mt-5">
          <Movies></Movies>
        </div>
      </div>
    );
  }
}


