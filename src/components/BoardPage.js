import React, { Component } from 'react';
import IdeaItem from './IdeaItem';
import { withStyles } from '@material-ui/core/styles';
import { createReadStream } from 'fs';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIdeaModal from './CreateIdeaModal';

const styles = theme => ({
  ideaColumn: {
    minWidth: 275,
    maxWidth: 650,
    margin: 'auto',
    width: '90%',
  },
  ideaList: {
    
  },
  boardTitle: {
    margin: "20px 0 20px 0",
  },
  subTitle: {
    margin: "0 0 20px 0",
    color: theme.palette.text.secondary,
  },
  inlineLeft: {
    display: 'inline',
  },
  inlineRight: {
    display: 'inline',
    float: 'right',
  }
});

//TODO: make expansion panels collapse when a different panel is clicked
//this is outlined in the second example of material ui react page for expansion panels
class BoardPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.ideaColumn}>
        <Typography variant="h3" className={classes.boardTitle}>
          Board title here
        </Typography>
        <CreateIdeaModal></CreateIdeaModal>
        <div className={classes.subTitle}>
          <Typography color="textSecondary" className={classes.inlineLeft}>
            Num of Ideas here
          </Typography>
          <Typography color="textSecondary" className={classes.inlineRight}>
            Num of your votes left
          </Typography>
        </div>
        <div className={classes.ideaList}>
            <IdeaItem></IdeaItem>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentBoard: state.currentBoard,
  }
}

export default withStyles(styles)(connect(mapStateToProps, null)(BoardPage));

