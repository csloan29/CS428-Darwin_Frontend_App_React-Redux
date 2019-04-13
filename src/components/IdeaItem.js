import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { getCurrentBoard } from '../reducers';

import LikeButton from './LikeButton';
import RestoreButton from './RestoreButton';
import ChatList from './ChatList';

const styles = theme => {
  return {
    root: {
      margin: "0 0 10px 0",
    },
    ideaText: {
      display: 'block',
    },
    button: {
      margin: "0 10px 0 0",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      margin: "5px 0 0 0",
    },
    explanation: {
      margin: "0 0 15px 0",
    },
    details: {
      display: "block",
    },
    chatList: {
      margin: "15px 0 0 0",
    },
    removedText: {
      textDecoration: "line-through",

    }
}};

class IdeaItem extends Component {

  constructor(props) {
    super(props);

    this.onSeeMore = this.onSeeMore.bind(this);
  }

  onSeeMore() {
    this.props.history.push(`/boards/${this.props.match.params.id}/${this.props.id}`);
  }

  filterComments() {
    let comments = this.props.comments;
    if(comments.length > 3) {
      return comments.slice(comments.length - 3);
    }
    return comments;
  }

  renderIcon(classes) {
    if (this.props.currentBoard.is_voting) {
      if (this.props.alive) {
        return (
          <LikeButton ideaID={this.props.id} liked={this.props.has_voted} className={classes.button}></LikeButton>
        )
      }
      else {
        if (this.props.currentBoard.is_owner) {
          return (
            <RestoreButton ideaID={this.props.id} className={classes.button}></RestoreButton>
          )
        }
        return null;    
      }
    }
    else {
      if (this.props.alive) {
        return null;
      }
      else {
        if (this.props.currentBoard.is_owner) {
          return (
            <RestoreButton ideaID={this.props.id} className={classes.button}></RestoreButton>
          )
        }
        return null;    
      }
    }
  }

  renderIdeaText(classes) {
    if (this.props.alive) {
      return (
        <div className={classes.ideaText}>
          <Typography className={classes.heading}>{this.props.title}</Typography>
          <Typography className={classes.secondaryHeading}>Total Votes: {this.props.total_votes}</Typography>
        </div>
      )
    }
    else {
      return (
        <div className={classes.ideaText}>
          <Typography className={classes.heading && classes.removedText}>{this.props.title}</Typography>
          <Typography className={classes.secondaryHeading}>Idea was removed</Typography>
        </div>
      )
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div>
            {this.renderIcon(classes)}
          </div>
          {this.renderIdeaText(classes)}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.explanation}>
            <Typography variant="caption">
              {this.props.description}
            </Typography>
          </div>
          <Divider />
          <ChatList className={classes.chatList} chatList={this.filterComments()}/>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Button size="small" color="primary" onClick={this.onSeeMore}>
            See More...
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
    )
  }
}

IdeaItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentBoard: getCurrentBoard(state),
  }
}

export default withStyles(styles)(connect(mapStateToProps, null)(IdeaItem));
