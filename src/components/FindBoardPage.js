import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  container: {
    textAlign: 'center'
  },
  createBoard: {
    marginTop: '20px'
  }
});

class FindBoardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardID: '',
      first: true
    }
    this.createBoard = this.createBoard.bind(this);
    this.viewBoard = this.viewBoard.bind(this);
  }

  createBoard() {

  }

  viewBoard() {
    this.setState({
      first: false
    });
    if(this.state.boardID) { //do other checks to see if valid?
      this.props.history.push(`/boards/${this.state.boardID}`);
    }
  }

  handleChange(name) {
    return (e) => {
      this.setState({
        [name]: e.target.value
      })
    }
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
      <div className={classes.container}>
        <Button variant="contained" color="primary" className={`${classes.button} ${classes.createBoard}`} onClick={this.createBoard}>
          Create Board
        </Button>
        <p>
          OR
        </p>
        <form autoComplete="false">
          <TextField
            id="boardID"
            error={this.isError("boardID")}
            label="Board ID ex. A1B2"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange("boardID")}
          />
          <br/>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.viewBoard}>
            View Board
          </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(FindBoardPage);
