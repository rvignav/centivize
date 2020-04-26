import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

export default class CardHeader extends Component {
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col">
            <h4>
              {this.props.post.title}
              <FontAwesomeIcon
                className="text-primary"
                icon={faStar}
                style={{
                  display: this.props.recommended ? 'inline' : 'none',
                }}
              />
            </h4>
            <h5>
              {this.props.post.name} <small>-{this.props.post.date}</small>
            </h5>
          </div>

          {/* Upvote and downvote buttons */}
          <div className="col-fit float-right">
            <div className="btn-group">
              <button className="btn btn-sm btn-dark">
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
              <button className="btn btn-sm btn-dark mr-2">
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
