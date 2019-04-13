import React, { Component } from 'react';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined';
import ThumbUp from '@material-ui/icons/ThumbUp';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBox from '@material-ui/icons/CheckBox';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { restoreIdea } from '../actions';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  outline: {
    color: 'white',
    backgroundColor: 'black'
  }
});

class RestoreButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restored: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.stopPropagation();
    this.props.restore(this.props.ideaID);
    this.setState({
      restored: true,
    })
  }

  render() {
    //const { classes } = this.props;
    //TODO: change the requirements for this!
    return (
      <Tooltip title="Restore">
        <IconButton className={this.props.className} aria-label="Like Button" onClick={this.handleClick}>
          {this.props.restored ? <CheckBox /> : <CheckBoxOutlineBlank />}
        </IconButton>
      </Tooltip>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    restore: (ideaID) => {
      dispatch(restoreIdea(ideaID));
    }
  }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(RestoreButton));
