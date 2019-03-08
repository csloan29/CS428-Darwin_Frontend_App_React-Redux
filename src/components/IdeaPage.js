import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatList from './ChatList';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LikeButton from './LikeButton';

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

  }
});

class IdeaPage extends Component {
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
          <LikeButton className={classes.likeButton}/>
        </div>
        <Divider/>
        <ChatList />
      </div>
    )
  }
}

export default withStyles(styles)(IdeaPage);
