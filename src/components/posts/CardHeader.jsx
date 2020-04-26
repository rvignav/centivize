import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import VoteButton from './VoteButton';

export default class CardHeader extends Component {
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col">
            <h4 className="font-weight-bold">
              {this.props.post.title}
              {/* if recommended, show star */}
              <FontAwesomeIcon
                className="text-primary"
                icon={faStar}
                style={{
                  display: this.props.recommended ? 'inline' : 'none',
                }}
              />
            </h4>
            <h5>
              {this.props.post.author}
              {this.props.post.author && ' - '}
              <small>
                {this.props.post.timePosted
                  .toDate()
                  .toLocaleDateString('en-US')}
              </small>
            </h5>
          </div>

          {/* Upvote and downvote buttons */}
          <div className="col-fit float-right">
            <div className="btn-group mr-2">
              {/* upvote */}
              <VoteButton
                changeVote={this.props.changeVote}
                voteChangeAmt={1}
                id={this.props.id}
                icon={<FontAwesomeIcon icon={faChevronUp} />}
              />
              {/* downvote */}
              <VoteButton
                changeVote={this.props.changeVote}
                voteChangeAmt={0}
                id={this.props.id}
                icon={<FontAwesomeIcon icon={faChevronDown} />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
