import React, { Component } from 'react';
import IdeaItem from './IdeaItem';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CreateIdeaModal from './CreateIdeaModal';
import { getCurrentBoard } from '../reducers';
import { viewBoard } from '../actions';

const styles = theme => ({
  ideaColumn: {
    minWidth: 275,
    maxWidth: 650,
    margin: 'auto',
    width: '90%',
  },
  noIdeasWarning: {
    textAlign: 'center',
    margin: '50px 0 0 0',
  },
  ideaList: {

  },
  exIdeaList: {
    margin: "40px 0 0 0",
  },
  boardTitle: {
    margin: "20px 0 20px 0",
  },
  subTitle: {
    margin: "0 0 20px 0",
    color: theme.palette.text.secondary,
  },
  addButton: {
    margin: "0 0 15px 0",
  },
  inlineLeft: {
    display: 'inline',
  },
  exTitle: {
    margin: "0 0 20px 0",
  },
  inlineRight: {
    display: 'inline',
    float: 'right',
  }
});

//TODO: make expansion panels collapse when a different panel is clicked
//this is outlined in the second example of material ui react page for expansion panels
class BoardPage extends Component {

  componentDidMount() {
    if (!this.props.currentBoard.id) {
      this.props.viewBoard(this.props.match.params.id);
    }
  }

  shouldShowVoteCount(classes) {
    if (this.props.currentBoard.is_voting) {
      return (
        <div>
          <Typography color="textSecondary" className={classes.inlineLeft}>
            Total Ideas: {this.props.currentBoard.ideas ? this.props.currentBoard.ideas.length : ""}
          </Typography>
          <Typography color="textSecondary" className={classes.inlineRight}>
            Votes you have left: {this.props.currentBoard.votes_remaining ? this.props.currentBoard.votes_remaining : "0"}
          </Typography>
        </div>
      )
    }
  }

  printListTitle(classes, whichList) {
    if (whichList === "ideaList") {
      var allIdeas = this.props.currentBoard.ideas;
      if (!allIdeas || allIdeas.length === 0) {
        return null;
      }
      var ideaList = allIdeas.filter(idea => { return idea.alive; });
      if (!ideaList || ideaList.length === 0) {
        return null;
      }
      else {
        return (
          <Typography variant="h6" color="textSecondary" className={classes.inlineLeft && classes.exTitle}>
            Current Ideas:
          </Typography>
        )
      }
    }
    else {
      var allIdeas = this.props.currentBoard.ideas;
      if (!allIdeas || allIdeas.length === 0) {
        return null;
      }
      var exIdeaList = allIdeas.filter(idea => { return !idea.alive; });
      if (!exIdeaList || exIdeaList.length === 0) {
        return null;
      }
      else {
        return (
          <Typography variant="h6" color="textSecondary" className={classes.inlineLeft && classes.exTitle}>
            Removed Ideas:
          </Typography>
        )
      }
    }
  }

  renderIdeaList(classes, whichList) {
    if (whichList === "ideaList") {
      var allIdeas = this.props.currentBoard.ideas;
      if (!allIdeas || allIdeas.length === 0) {
        return (
          <Typography variant="h5" color="textSecondary" className={classes.noIdeasWarning}>
            No ideas added yet
          </Typography>
        )
      }
      var ideaList = allIdeas.filter(idea => { return idea.alive; });
      if (!ideaList || ideaList.length === 0) {
        return (
          <Typography variant="h5" color="textSecondary" className={classes.noIdeasWarning}>
            No ideas added yet
          </Typography>
        )
      }
      else {
        var itemsArr = ideaList.map((idea) => {
          return (
            this.generateIdeaItem(idea)
          )
        });
        return itemsArr;
      }
    }
    else if (whichList === "exIdeaList") {
      var allIdeas = this.props.currentBoard.ideas;
      if (!allIdeas || allIdeas.length === 0) {
        return null;
      }
      var exIdeaList = allIdeas.filter(idea => { return !idea.alive; });
      if (!exIdeaList || exIdeaList.length === 0) {
        return null;
      }
      else {
        var itemsArr = exIdeaList.map((idea) => {
          return (
            this.generateIdeaItem(idea)
          )
        });
        return itemsArr;
      }
    }
  }

  generateIdeaItem(idea) {
    return (
      <IdeaItem 
        key={idea.id}
        id={idea.id}
        title={idea.title}
        total_votes={idea.total_votes} 
        description={idea.description}
        comments={idea.comments}
        has_voted={idea.has_voted}
        alive={idea.alive}
        history={this.props.history}
        match={this.props.match}
      >
      </IdeaItem>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.ideaColumn}>
        <Typography variant="h4" className={classes.boardTitle} gutterBottom>
          {this.props.currentBoard.name}
        </Typography>
        <CreateIdeaModal className={classes.addButton}></CreateIdeaModal>
        <div className={classes.subTitle}>
          {this.shouldShowVoteCount(classes)}
        </div>
        <div className={classes.ideaList}>
          {this.printListTitle(classes, "ideaList")}
          {this.renderIdeaList(classes, "ideaList")}
        </div>
        <div className={classes.exIdeaList}>
          {this.printListTitle(classes, "exIdeaList")}
          {this.renderIdeaList(classes, "exIdeaList")}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentBoard: getCurrentBoard(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewBoard: (boardID) => {
      dispatch(viewBoard(boardID));
    }
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BoardPage));

