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
import { signOut } from '../actions';
import { connect } from 'react-redux';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.signOut();
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to='/boards' style={{textDecoration: 'none'}}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    }
  }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(Sidebar));
