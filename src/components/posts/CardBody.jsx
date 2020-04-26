import React, { Component } from 'react';

export default class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        {/* message */}
        <p>{this.props.post.title}</p>

        {/* two buttons, second one is collapse */}
        <button className="mr-2 btn btn-primary">
          Help{' '}
          {this.props.post.author
            ? this.props.post.author.split(' ')[0]
            : 'out'}
        </button>
        <button
          id={`collapseButton${this.props.post.id}`}
          className="btn btn-secondary"
          onClick={() => this.props.toggleCollapsed(this.props.post.id)}
        >
          Learn more
        </button>

        {/* collapsed details */}
        <div
          style={{ display: 'none', paddingTop: '1em' }}
          id={`collapseInfo${this.props.post.id}`}
        >
          {this.props.post.message}
        </div>
      </div>
    );
  }
}
