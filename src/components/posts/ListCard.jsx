import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export class ListCard extends Component {
  toggleCollapsed = (id) => {
    let button = document.getElementById('collapseButton' + id);
    button.innerText =
      button.innerText === 'Learn more' ? 'Show less' : 'Learn more';
    let info = document.getElementById('collapseInfo' + id);
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
  };

  render() {
    return (
      <div>
        <div key={this.props.post.id} className="card mb-2 m-0 w-100 post">
          <CardHeader post={this.props.post} />
          <CardBody post={this.props.post} />
        </div>
      </div>
    );
  }
}

export default ListCard;
