import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class CommentCard extends Component {
  constructor() {
    super()
    this.state = {
      render: true
    }
  }

  deleteComment = async () => {
    const res = await axios.delete(
      `${BASE_URL}/api/trails/${this.props.trail_id}/comments/${this.props._id}`
    )
    console.log('deleted!')
    window.location.reload(false)
  }

  render() {
    return (
      <div className="comment-container">
        <img className="hiker-guy" src="https://i.imgur.com/qXLDCd7.png"></img>
        <div className="rating-weather">
          <span>
            <u>rating</u>: {this.props.rating} stars
          </span>
          <span id="weather">
            <u>weather conditions</u>: {this.props.conditions}
          </span>
        </div>
        <p id="comment-p">
          <u>comment</u>: {this.props.comment}
        </p>
        <button className="delete-comment" onClick={this.deleteComment}>
          x
        </button>
      </div>
    )
  }
}
