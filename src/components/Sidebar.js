import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import ViewListIcon from '@material-ui/icons/ViewList';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { signOut, clearCurrentBoard } from '../actions';
import { getCurrentBoardID } from '../reducers'

const styles = {
  list: {
    width: 250,
  },
  joinCode: {
    textAlign: "center",
  },
  fullList: {
    width: 'auto',
  },
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
    this.escapeBoard = this.escapeBoard.bind(this);
  }

  escapeBoard() {
    this.props.clearCurrentBoard();
  }

  logOut() {
    this.props.clearCurrentBoard();
    this.props.signOut();
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to='/boards' style={{textDecoration: 'none'}} onClick={this.escapeBoard}>
            <ListItem button key={"Find Board"}>
              <ListItemIcon><SearchIcon /></ListItemIcon>
              <ListItemText primary={"Find Board"} />
            </ListItem>
          </Link>
          <Link to='/boards/TEST' style={{textDecoration: 'none'}}>
            <ListItem button key={"View Last Board"}>
              <ListItemIcon><ViewListIcon /></ListItemIcon>
              <ListItemText primary={"View Last Board"} />
            </ListItem>
          </Link>
          <Link to='/' style={{textDecoration: 'none'}} onClick={this.logOut}>
            <ListItem button key={"Logout"}>
              <ListItemIcon><ArrowBackIcon /></ListItemIcon>
              <ListItemText primary={"Sign Out"} />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.menuOpen} onClose={this.props.toggleMenu}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleMenu}
            onKeyDown={this.props.toggleMenu}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentBoardID: getCurrentBoardID(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
    clearCurrentBoard: () => {
      dispatch(clearCurrentBoard());
    }
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
