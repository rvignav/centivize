import React, { Component } from 'react'

export class ListCard extends Component {
    toggleCollapsed = (id) => {
        let button = document.getElementById("collapseButton" + id)
        button.innerText = button.innerText == "Learn more" ? "Show less" : "Learn more"
        let info = document.getElementById("collapseInfo" + id)
        info.style.display = info.style.display == "block" ? "none" : "block"
    }

    render() {
        return (
            <div key={this.props.post.id} className="card mb-2 m-0 w-100 post">
                <div className="card-header">
                    <h4>{this.props.post.title}</h4>
                    <h5>{this.props.post.name} <small>-{this.props.post.date}</small></h5>
                </div>
                <div className="card-body">
                    <p>{this.props.post.intro}</p>
                    <button className="btn-sm btn-primary mr-2" >Help {this.props.post.name}</button>
                    <button id={"collapseButton" + this.props.post.id} className="btn-sm btn-secondary" onClick={() => this.toggleCollapsed(this.props.post.id)}>Learn more</button>
                    <div style={{ display: "none", paddingTop: "1em" }} id={"collapseInfo" + this.props.post.id}>
                        {this.props.post.info}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCard
