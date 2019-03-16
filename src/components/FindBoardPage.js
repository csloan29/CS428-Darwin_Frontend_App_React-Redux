import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreateBoardModal from './CreateBoardModal';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  container: {
    marginTop: "7em",
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  createBoard: {
    margin: '30px 0 40px 0',
  }
});

class FindBoardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardID: '',
      first: true
    }
    this.viewBoard = this.viewBoard.bind(this);
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
        <Typography className={classes.title} variant='h2' gutterBottom>Find a Board</Typography>
        <CreateBoardModal className={classes.createBoard}/>
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
