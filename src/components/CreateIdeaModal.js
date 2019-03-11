import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createBoard } from '../actions';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => {
  return {
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
}};

class CreateIdeaModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      first: true,
      modal: false
    }
    this.createIdea = this.createIdea.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  createIdea() {
    this.setState({
      first: false
    })
    if(this.state.title) {
      //do something
      this.props.createIdea(this.state.title);
    }
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
    if(!this.state.modal) {
      //if closed, reset the values
      this.setState({
        first: true,
        title: ""
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

  handleChange(name) {
    return (e) => {
      this.setState({
        [name]: e.target.value
      })
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.className}>
        <Button variant="contained" color="primary" className={`${classes.button} ${classes.createBoard}`} onClick={this.toggleModal}>
          Add new idea
        </Button>
        <Modal
          open={this.state.modal}
          onClose={this.toggleModal}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Add Idea
            </Typography>
            <TextField
              id="boardTitle"
              error={this.isError("title")}
              label="Idea here"
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange("title")}
            />
            <br/>
            <div>
              <Button variant="text" color="primary" className={classes.button} onClick={this.createBoard}>
                Add
              </Button>
              <Button variant="text" className={classes.button} onClick={this.toggleModal}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (title) => {
      dispatch(createBoard(title));
    }
  }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(CreateIdeaModal));