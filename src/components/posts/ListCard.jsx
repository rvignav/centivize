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

  changeVote = (id, amount) => {};

  // CURRENTLY:
  // CardHeader holds Title, Author, and Date, Upvote/Downvote buttons
  // CardBody holds the message, help button, and detailed paragraph (expandable on 'Learn more')

  render() {
    return (
      <div>
        <div key={this.props.post.id} className="card mb-2 m-0 w-100 post">
          <CardHeader post={this.props.post} changeVote={this.changeVote} />
          <CardBody
            post={this.props.post}
            toggleCollapsed={this.toggleCollapsed}
          />
        </div>
      </div>
    );
  }
}

export default ListCard;
