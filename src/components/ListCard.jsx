import React, { Component } from 'react'

export class ListCard extends Component {
    render() {
        return (
            <div key={this.props.post.id} className="card card-body shadow-sm mb-2">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.name}</p>
                <p>{this.props.post.intro}</p>
                <button className="btn-sm btn-secondary">Learn more</button>
            </div>
        )
    }
}

export default ListCard
