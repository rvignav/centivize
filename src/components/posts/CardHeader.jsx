import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronUp } from '@fortawesome/free-solid-svg-icons';


export default class CardHeader extends Component {
  render() {
    return (
      <div className="card-header">
        <h4>
          {this.props.post.title}{' '}
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
    );
  }
}
