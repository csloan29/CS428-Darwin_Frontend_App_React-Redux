import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import FindBoardPage from './components/FindBoardPage';
import BoardPage from './components/BoardPage';
import IdeaPage from './components/IdeaPage';
import RegisterPage from './components/RegisterPage';
import Header from './components/Header';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { getIsLoggedIn } from './reducers';
import './App.css';
import Poller from './poller.js';

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

const wrapInPoller = (Component) => {
  return (props) => {
    return (
      <Poller>
        <Component {...props}/>
      </Poller>
    )
  }
}

const Authenticated = (props) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/boards" component={FindBoardPage}/>
        <Route exact path="/boards/:id" component={wrapInPoller(BoardPage)}/>
        <Route exact path="/boards/:id/:ideaID" component={wrapInPoller(IdeaPage)}/>
        <Redirect from="/" to="/boards"/>
      </Switch>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.enforceLogin = this.enforceLogin.bind(this);
  }

  enforceLogin() {
    if(this.props.isLoggedIn) {
      return <Authenticated />;
    }
    return <Redirect to='/login' />
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/register" component={RegisterPage}/>
              <Route path="/" render={this.enforceLogin}/>
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: getIsLoggedIn(state)
  }
};

export default connect(mapStateToProps)(App);
