import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class VoteButton extends Component {
  render() {
    return (
      <button
      // unique id with vote(1/0)(id)
      id={"vote" + this.props.voteChangeAmt + this.props.id}
        onClick={() =>
          this.props.changeVote(this.props.id, this.props.voteChangeAmt)
        }
        className="btn btn-sm btn-dark"
      >
        {this.props.icon}
      </button>
    );
  }
}

export default VoteButton;
