import React, { Component } from 'react';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { vote } from '../actions';

const styles = theme => ({
  outline: {
    color: 'white',
    backgroundColor: 'black'
  }
});

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.stopPropagation();
    this.props.vote(this.props.ideaID);
  }

  render() {
    //const { classes } = this.props;
    return (
      <IconButton className={this.props.className} aria-label="Like Button" onClick={this.handleClick}>
        {this.props.liked ? <ThumbUp /> : <ThumbUpOutlined />}
      </IconButton>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    vote: (ideaID) => {
      dispatch(vote(ideaID));
    }
  }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(LikeButton));
