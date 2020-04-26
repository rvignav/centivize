import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export class ListCard extends Component {
  toggleCollapsed = (id) => {
    const button = document.getElementById(`collapseButton${id}`);
    button.innerText =
      button.innerText === 'Learn more' ? 'Show less' : 'Learn more';
    const info = document.getElementById(`collapseInfo${id}`);
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
  };

  changeVote = (id, amount) => {
    // get buttons
    const upvote = document.getElementById(`vote1${id}`);
    const downvote = document.getElementById(`vote0${id}`);
    // if one of these is green, there has been a vote so just return
    if (
      upvote.className.includes('btn-success') ||
      downvote.className.includes('btn-success')
    ) {
    } else {
      // otherwise set the correct one to green
      if (amount === 1) {
        upvote.className = 'btn-sm btn btn-success';
        console.log(`${id} has been UPVOTED`);
        // FIREBASE CODE HERE for upvoting id
      } else {
        downvote.className = 'btn-sm btn btn-success';
        console.log(`${id} has been DOWNVOTED`);
        // FIREBASE CODE HERE for downvoting id
      }
    }
  };

  // CURRENTLY:
  // CardHeader holds Title, Author, and Date, Upvote/Downvote buttons
  // CardBody holds the message, help button, and detailed paragraph (expandable on 'Learn more')
  //   let turnGreen = (id) => {
  //   let card = document.getElementById('card-' + id);
  //   card.style.backgroundColor = 'green';
  // };

  render() {
    return (
      <div>
        <div
          id={`card-${this.props.post.id}`}
          key={this.props.post.id}
          className="card mb-2 m-0 w-100 post"
        >
          <CardHeader
            id={this.props.post.id}
            post={this.props.post}
            changeVote={this.changeVote}
          />
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
