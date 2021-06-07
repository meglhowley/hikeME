import React, { Component } from 'react'
import CommentCard from './CommentCard'

export default class CommentList extends Component {
  render() {
    const { commentIds, comments } = this.props
    let targetedComments = []
    commentIds.forEach((id) => {
      for (let i = 0; i < comments.length; i++) {
        if (id === comments[i]._id) {
          targetedComments.unshift(comments[i])
        }
      }
    })
    return (
      <div className="comment-list">
        {commentIds ? (
          targetedComments.map((comment, index) => (
            <CommentCard key={index} {...comment} />
          ))
        ) : (
          <div>No comments for this trail...yet!</div>
        )}
      </div>
    )
  }
}
