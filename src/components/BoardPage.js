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

const initialState = {
  currentBoard: {
   id: 1,
   owner: "Carter",
   title: "We need more ideas for how to run the country",
   ideas: [
     {
       id: 1,
       owner: "Carter",
       board: 1,
       votes: 5,
       text: "We need more naps throughout the day",
       explanation: "This is my great explanation of my idea",
       comments: [ 
         {
           owner: "Carter",
           text: "This my great new idea!"
         },
         {
           owner: "Connor",
           text: "wow, this idea is so great! Carter for pres 2024"
         }
       ]

     },
     {
      id: 2,
      owner: "Connor",
      board: 2,
      votes: 2,
      text: "We need to actually be productive and fill out our spreadsheets on time. I swear if we don't do this I'm going to flip my hat!",
      explanation: "This is my great explanation of my idea",
      comments: [ 
        {
          owner: "Connor",
          text: "This my idea. I'm right, too"
        },
        {
          owner: "Carter",
          text: "wow, this idea is so great, also!"
        }
      ]

    },
   ]
 }
}

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
  addButton: {
    margin: "0 0 15px 0",
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

  constructor(props) {
    super(props);

  }

  renderIdeaList() {
    //TODO: get the initial state from the store
    var ideas = initialState.currentBoard.ideas;
    var ideaItems = ideas.map(function(idea) {
              return <IdeaItem 
                      key={idea.id}
                      title={idea.text} 
                      votes={idea.votes} 
                      explanation={idea.explanation}
                      chatList={idea.comments}
                      >
                      </IdeaItem>
              });
    return ideaItems;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.ideaColumn}>
        <Typography variant="h4" className={classes.boardTitle} gutterBottom>
          This is a really long board title to test the limits of the div
        </Typography>
        <CreateIdeaModal className={classes.addButton}></CreateIdeaModal>
        <div className={classes.subTitle}>
          <Typography color="textSecondary" className={classes.inlineLeft}>
            Total Ideas: {this.props.numIdeas}
          </Typography>
          <Typography color="textSecondary" className={classes.inlineRight}>
            Votes you have left: {this.props.remainingVotes}
          </Typography>
        </div>
        <div className={classes.ideaList}>
            {this.renderIdeaList()}
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

