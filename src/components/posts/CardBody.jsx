import React, { Component } from 'react';

export default class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <p>{this.props.post.intro}</p>
        <button className="btn btn-primary mr-2">
          Help {this.props.post.name.split(' ')[0]}
        </button>
        <button
          id={'collapseButton' + this.props.post.id}
          className="btn btn-secondary"
          onClick={() => this.toggleCollapsed(this.props.post.id)}
        >
          Learn more
        </button>
        <div
          style={{ display: 'none', paddingTop: '1em' }}
          id={'collapseInfo' + this.props.post.id}
        >
          {this.props.post.info}
        </div>
      </div>
    );
  }
}
