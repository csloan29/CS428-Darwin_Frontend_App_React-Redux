import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import { connect } from 'react-redux';
import { getCurrentBoard } from '../reducers';
import { startVoting, endVoting } from '../actions';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  banner: {
    backgroundColor: "lightGrey",
    height: "70px",
  },
  textOn: {
    color: "#C33C54",
  },
  centerColumn: {
    minWidth: 275,
    maxWidth: 650,
    margin: 'auto',
    width: '90%',
    textAlign: 'center',
    padding: "20px 0 0 0",
  },
  details: {
    display: "block",
  },
  voteBar: {
    margin: "0 0 20px 0",
    textAlign: 'left',
  },
  textField: {
    margin: "-12px 0 0 0",
  },
  button: {
    margin: "0 25px 0 0",
  },
  boardJoinCode: {
    paddingTop: "15px",
    textAlign: 'left',
  },
  settIcon: {
    margin: "3px 15px 0 0",
  }
});

class ControlPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      is_voting: this.props.currentBoard.is_voting,
      first: true,
    }
    this.startVoting = this.startVoting.bind(this);
    this.endVoting = this.endVoting.bind(this);
  }

  handleChange(id) {
    return (e) => {
      this.setState({
        [id]: e.target.value
      })
    }
  }

  isError(id) {
    if(this.state.first) {
      return false;
    }
    if(this.state[id]) {
      return false;
    }
    return true;
  }

  startVoting() {
    if (!this.state.votesPerUser) {
      this.setState({
        first: false,
      });
      return;
    }
    this.props.startVoting(this.props.currentBoard.id, this.props.votesPerUser);
  }

  endVoting() {
    console.log("got into end voting");
    if (!this.state.cutoffVotes) {
      this.setState({
        first: false,
      });
      return;    }
    this.props.endVoting(this.props.currentBoard.id, this.props.cutoffVotes);
  }

  render() {
    const { classes } = this.props;
    //TODO: change these qualifications to be based on board state, not local state
    if (this.props.currentBoard.is_owner) {
      if (this.props.currentBoard.is_voting) {
        return (
          <div className={classes.centerColumn}>
            <div className={classes.onBanner}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <SettingsIcon className={classes.settIcon}></SettingsIcon>
                  <Typography variant="h5" >Board Control Panel</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div>
                    <Button 
                    variant="outlined" 
                    className={classes.button}
                    onClick={this.endVoting}
                    >
                      End Voting
                    </Button>          
                    <TextField
                      id="votesCutoff"
                      error={this.isError("votesCutoff")}
                      label="Minimum Cutoff Votes"
                      className={classes.textField}
                      margin="normal"
                      onChange={this.handleChange("votesCutoff")}
                    />
                  </div>
                  <Divider />
                  <Typography className={classes.boardJoinCode}>
                    Board Join Code: {this.props.currentBoard.id}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </div>
        )
      }
      else {
        return (
          <div className={classes.centerColumn}>
            <div className={classes.offBanner}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <SettingsIcon className={classes.settIcon}></SettingsIcon>
                  <Typography variant="h5" >Board Control Panel</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                  <div className={classes.voteBar}>
                    <Button
                    variant="outlined" 
                    className={classes.button}
                    onClick={this.startVoting}
                    >
                      Start Voting
                    </Button>         
                    <TextField
                      id="votesPerUser"
                      error={this.isError("votesPerUser")}
                      label="Votes per User"
                      className={classes.textField}
                      margin="normal"
                      onChange={this.handleChange("votesPerUser")}
                    />
                  </div>
                  <Divider />
                  <Typography className={classes.boardJoinCode}>
                    Board Join Code:    {this.props.currentBoard.id}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </div>
        )
      }
    }
    else {
      if (this.props.currentBoard.is_voting) {
        return (
          <div className={classes.banner}>
            <div className={classes.centerColumn}>
              <Typography variant="h5" component="h2" className={classes.textOn}>
                Round of Voting has Started
              </Typography>
            </div>
          </div>
        )
      }
      else {
        return (
          <div className={classes.banner}>
            <div className={classes.centerColumn}>
              <Typography variant="h5" component="h2">
                Voting on ideas is currently disabled
              </Typography>
            </div>
          </div>
        )
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentBoard: getCurrentBoard(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startVoting: (boardID, votesPerUser) => {
      dispatch(startVoting(boardID, votesPerUser));
    },
    endVoting: (boardID, cutoffVotes) => {
      dispatch(endVoting(boardID, cutoffVotes));
    },
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ControlPanel));