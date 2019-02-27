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

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Sidebar extends Component {
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

export default withStyles(styles)(Sidebar);
