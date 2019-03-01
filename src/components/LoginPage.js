import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
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
          <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit}>
            Login/Register
          </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(LoginPage));
