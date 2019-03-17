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

import LikeButton from './LikeButton';
import ChatList from './ChatList';

const styles = theme => {
  return {
    root: {
      margin: "0 0 10px 0",
    },
    ideaText: {
      display: 'block',
    },
    likeButton: {
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
}};

class IdeaItem extends Component {

  constructor(props) {
    super(props);

    this.onSeeMore = this.onSeeMore.bind(this);
  }

  onSeeMore() {
    //TODO: finish this link
    this.props.history.push(`/boards/${this.props.match.params.id}/`);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div>
            <LikeButton ideaID={this.props.id} liked={this.props.has_voted} className={classes.likeButton}></LikeButton>

          </div>
          <div className={classes.ideaText}>
            <Typography className={classes.heading}>{this.props.title}</Typography>
            <Typography className={classes.secondaryHeading}>Total Votes: {this.props.total_votes}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.explanation}>
            <Typography variant="caption">
              {this.props.description}
            </Typography>
          </div>
          <Divider />
          <ChatList className={classes.chatList} chatList={this.props.comments}/>
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

export default withStyles(styles)(IdeaItem);
