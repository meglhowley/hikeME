import React, { Component } from 'react'

export default class CommentCard extends Component {
  render() {
    return (
      <div className="comment-container">
        <h3>rating: {this.props.rating}</h3>
        <h3>conditions: {this.props.conditions}</h3>
        <p>{this.props.comment}</p>
      </div>
    )
  }
}
