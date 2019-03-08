import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import FindBoardPage from './components/FindBoardPage';
import ViewBoardPage from './components/ViewBoardPage';
import IdeaPage from './components/IdeaPage';
import Header from './components/Header';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFFF00' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
  spacing: {
    page: {
      topMargin: '20px'
    }
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <Header />
              <Route exact path="/" component={LoginPage}/>
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/boards" component={FindBoardPage}/>
              <Route exact path="/boards/:id" component={ViewBoardPage}/>
              <Route exact path="/boards/:id/:ideaID" component={IdeaPage}/>
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
