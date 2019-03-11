import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import FindBoardPage from './components/FindBoardPage';
import BoardPage from './components/BoardPage';
import IdeaPage from './components/IdeaPage';
import Header from './components/Header';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

const theme = createMuiTheme({
  palette: {

  },
  typography: { useNextVariants: true },
  spacing: {
    page: {
      marginTop: '20px'
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
              <Route exact path="/boards/:id" component={BoardPage}/>
              <Route exact path="/boards/:id/:ideaID" component={IdeaPage}/>
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
