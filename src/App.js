import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import FindBoardPage from './components/FindBoardPage';
import ViewBoardPage from './components/ViewBoardPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/boards" component={FindBoardPage}/>
            <Route exact path="/boards/:id" component={ViewBoardPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
