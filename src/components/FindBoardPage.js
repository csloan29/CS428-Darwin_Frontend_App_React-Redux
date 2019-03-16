import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreateBoardModal from './CreateBoardModal';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { viewBoard } from '../actions';
import { getCurrentBoardID } from '../reducers';
import { Redirect } from 'react-router-dom';

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
      this.props.viewBoard(this.state.boardID);
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
    if(this.props.currentBoardID) {
      return <Redirect to={`/boards/${this.props.currentBoardID}`}/>
    }
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

const mapStateToProps = (state) => {
  return {
    currentBoardID: getCurrentBoardID(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewBoard: (boardID) => {
      dispatch(viewBoard(boardID));
    }
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FindBoardPage));
