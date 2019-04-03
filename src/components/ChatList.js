import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

class ChatList extends Component {

  renderIdeas() {
    const { classes } = this.props;
    let ideas = [];
    if(!this.props.chatList) {
      return [];
    }
    for(let i = 0; i < this.props.chatList.length; i++) {
      let current = this.props.chatList[i];
      ideas.push(
        <ListItem key={"comment" + i} alignItems="flex-start">
          {/*
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
          */}
          <ListItemText
            primary={current.message}
            secondary={
              current.user.first_name + " " + current.user.last_name
            }
          />
        </ListItem>
      )
    }
    return ideas;
  }

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        {this.renderIdeas()}
      </List>
    )
  }
}

export default withStyles(styles)(ChatList);
