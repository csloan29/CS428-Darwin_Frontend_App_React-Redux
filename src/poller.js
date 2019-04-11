import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewBoard } from './actions';

class Poller extends Component {
  componentDidMount() {
    let timer = window.setInterval(() => {
      if(this.props.match.params.id) {
        this.props.viewBoard(this.props.match.params.id);
      }
    }, 1000);
    this.setState({
      timer
    })
  }

  componentWillUnmount() {
    console.log("Clearing interval");
    window.clearInterval(this.state.timer)
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
