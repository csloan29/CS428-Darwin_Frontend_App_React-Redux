import React, { Component } from 'react';
import IdeaItem from './IdeaItem';
import { withStyles } from '@material-ui/core/styles';
import { createReadStream } from 'fs';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const styles = {
  ideaColumn: {
    minWidth: 275,
    maxWidth: 650,
    margin: 'auto',
    width: '75%',
  },
  ideaList: {

  },
  boardTitle: {
    margin: "20px 0 20px 0",
    fontSize: "30px"
  }
};

//TODO: make expansion panels collapse when a different panel is clicked
//this is outlined in the second example of material ui react page for expansion panels
class ViewBoardPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.ideaColumn}>
        <Typography className={classes.boardTitle}>
          Board title here
        </Typography>
        <div>
          <Typography>
            Num of Ideas here
          </Typography>
          <Typography>
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

export default withStyles(styles)(connect(mapStateToProps, null)(ViewBoardPage));

