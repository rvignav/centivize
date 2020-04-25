import React, { Component } from 'react'

export class ListCard extends Component {
    render() {
        return (
            <div key={this.props.post.id} className="card-body shadow-sm mb-2 m-0 w-100 post">
                <h4>{this.props.post.title}</h4>
                <h5>{this.props.post.name}</h5>
                <p>{this.props.post.info}</p>
                <button className="btn-sm btn-primary mr-2" >Help {this.props.post.name}</button>
                <button className="btn-sm btn-secondary" data-toggle="collapse">Learn more</button>
                <div id="collapseInfo">
                        {this.props.post.fullPostInfo}
                </div>
            </div>
        )
    }
}

export default ListCard
