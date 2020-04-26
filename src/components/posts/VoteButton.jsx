import React, { Component } from 'react';

export class VoteButton extends Component {
  render() {
    return (
      <button onClick={() => this.props.changeVote(this.props.id, this.props.voteChangeAmt)} className="btn btn-sm btn-dark">
        {this.props.icon}
      </button>
    );
  }
}

export default VoteButton;
