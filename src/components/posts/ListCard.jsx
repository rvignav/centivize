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

  changeVote = (id, amount) => {
    // get buttons
    let upvote = document.getElementById('vote1' + id);
    let downvote = document.getElementById('vote0' + id);
    // if one of these is green, there has been a vote so just return
    if (
      upvote.className.includes('btn-success') ||
      downvote.className.includes('btn-success')
    ) {
      return;
    } else {
      // otherwise set the correct one to green
      if (amount === 1) {
        upvote.className = 'btn-sm btn btn-success';
        console.log(id + ' has been UPVOTED');
        // FIREBASE CODE HERE for upvoting id
      } else {
        downvote.className = 'btn-sm btn btn-success';
        console.log(id + ' has been DOWNVOTED');
        // FIREBASE CODE HERE for downvoting id
      }
    }
  };

  // CURRENTLY:
  // CardHeader holds Title, Author, and Date, Upvote/Downvote buttons
  // CardBody holds the message, help button, and detailed paragraph (expandable on 'Learn more')
  turnGreen = (id) => {
    card = document.getElementById('card-' + id);
    card.style.backgroundColor = 'green';
  };

  render() {
    return (
      <div>
        <div
          id={'card-' + this.props.post.id}
          key={this.props.post.id}
          className="card mb-2 m-0 w-100 post"
          onClick={() => turnGreen(this.props.id)}
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
