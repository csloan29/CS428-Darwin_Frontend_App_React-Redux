import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions';
import { getIsLoggedIn } from '../reducers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  loginForm: {
    textAlign: 'center'
  },
  button: {
    marginTop: "20px"
  },
  loginLink: {
    marginTop: '10px'
  }
});

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
      email: "",
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
    if(!this.state.user || !this.state.password || !this.state.email) {
      this.setState({
        first: false
      });
      return; //missing data...
    }
    //do some sort of authentication, including storing the session ID/token or something in session storage or a cookie
    this.props.register(this.state.user, this.state.password, this.state.email);
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
      <div>
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
            <TextField
              error={this.isError("email")}
              id="email"
              label="Email"
              type="email"
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange("email")}
            />
            <br/>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit}>
            Register
          </Button>
          <div className={classes.loginLink}>
            <Link to='/login'>
              Already Have an Account?
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
    register: (user, password, email) => {
      dispatch(register(user, password, email));
    }
  }
}

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage)));
