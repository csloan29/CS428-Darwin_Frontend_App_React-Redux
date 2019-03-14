import React, { Component } from 'react';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  outline: {
    color: 'white',
    backgroundColor: 'black'
  }
});

class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Like/unlike");
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    //const { classes } = this.props;
    return (
      <IconButton className={this.props.className} aria-label="Like Button" onClick={this.handleClick}>
        {this.state.liked ? <ThumbUp /> : <ThumbUpOutlined />}
      </IconButton>
    )
  }
}

export default withStyles(styles)(LikeButton);
