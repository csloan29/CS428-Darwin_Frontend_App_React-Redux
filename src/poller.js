import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewBoard } from './actions';

class Poller extends Component {
  componentDidMount() {
    console.log("mounting");
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewBoard: (boardID) => {
      dispatch(viewBoard(boardID));
    }
  }
}

export default connect(null, mapDispatchToProps)(Poller);
