import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import LikeButton from './LikeButton';
import ChatList from './ChatList';

const styles = theme => {
  console.log("Text", theme);
  return {
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    alignItems: 'center',
  },
}};

class IdeaItem extends Component {

  onSeeMore() {
    //TODO: finish this link
    this.props.history.push(`/boards/`);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Title here</Typography>
          <Typography className={classes.secondaryHeading}>number of votes here</Typography>
          <div>
            <LikeButton></LikeButton>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Typography variant="caption">
              This is where the explanation of the idea is going to go, should someone want to add an explanation.
            </Typography>
          </div>
          <Divider />
          <ChatList />
        </ExpansionPanelDetails>
        <Divider />
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

