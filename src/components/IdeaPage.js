import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatList from './ChatList';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LikeButton from './LikeButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Send from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getComments, getHasVoted } from '../reducers';
import { createComment } from '../actions';

const styles = theme => ({
  root: {
    width: '50%',
    margin: 'auto',
    ...theme.spacing.page
  },
  descrContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  descr: {
    width: '80%',
    display: 'inline-block'
  },
  likeButton: {

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  backButton: {
    width: '100%'
  }
});

class IdeaPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      first: true
    }
    this.newComment = this.newComment.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  newComment() {
    if(!this.state.text) {
      this.setState({
        first: false
      })
      return;
    }

    this.props.createComment(this.state.text, this.props.ideaID);
    console.log("gotHere?");
    this.setState({
      text: "",
      first: true
    });
  }

  onBack() {
    this.props.history.push(`/boards/${this.props.match.params.id}`);
  }

  handleChange(name) {
    return (e) => {
      this.setState({
        [name]: e.target.value
      });
    };
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
      <div className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Title of Idea
        </Typography>
        <div className={classes.descrContainer}>
          <Typography color="textSecondary" component="span" className={classes.descr} gutterBottom>
            Idea description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <LikeButton ideaID={this.props.ideaID} liked={this.props.has_voted} lassName={classes.likeButton}/>
        </div>
        <Divider/>
        <ChatList chatList={this.props.comments}/>
        <TextField
          id="newComment"
          label="Add Your Own Comment"
          placeholder="This idea is grrrreat!"
          multiline
          error={this.isError("text")}
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange("text")}
          value={this.state.text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={this.newComment}>
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
          }}/>
        <Button variant="text" color="primary" onClick={this.onBack} className={classes.backButton}>
          Back
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let ideaID = Number(ownProps.match.params.ideaID)
  return {
    comments: getComments(state, ownProps.match.params.ideaID),
    ideaID,
    has_voted: getHasVoted(state, ideaID)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (text, ideaID) => {
      dispatch(createComment(text, ideaID));
    }
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(IdeaPage));
