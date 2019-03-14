import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import { getIsLoggedIn } from '../reducers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  outerContainer: {
    marginTop: "7em",
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '200px',
  },
  loginForm: {
    textAlign: 'center',
    margin: 'auto',
    border: '2px solid black',
    width: '250px',
    borderRadius: '25px',
    padding: "10px 0 20px 0",
  },
  button: {
    marginTop: "20px"
  },
  registerLink: {
    marginTop: '10px'
  }
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
      first: true
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(name) {
    return (e) => {
      this.setState({
        [name]: e.target.value
      });
    };
  }

  onSubmit() {
    if(!this.state.user || !this.state.password) {
      this.setState({
        first: false
      });
      return; //missing data...
    }
    //do some sort of authentication, including storing the session ID/token or something in session storage or a cookie
    this.props.login(this.state.user, this.state.password);
    this.props.history.push('/boards');
  }

  isError(name) {
    if(this.state.first) {
      return false;
    }
    if(this.state[name]) {
      return false;
    }
    return true;
  }

  render() {
    const { classes } = this.props;
    if(this.props.isLoggedIn) {
      return <Redirect to='/'/>
    }
    return (
      <div className={classes.outerContainer}>
        <Typography className={classes.title} variant='h2' gutterBottom>DARWIN</Typography>
        <form autoComplete="off" className={classes.loginForm}>
          <TextField
            error={this.isError("user")}
            id="username"
            label="Username"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange("user")}
          />
          <br/>
          <TextField
            error={this.isError("password")}
            id="password"
            label="Password"
            type="password"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange("password")}
          />
          <br/>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit}>
            Login
          </Button>
          <div className={classes.registerLink}>
            <Link to='/register'>
              Need to Register?
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: getIsLoggedIn(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, password) => {
      dispatch(login(user, password));
    }
  }
}

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage)));
