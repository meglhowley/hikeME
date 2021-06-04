import React, { Component } from 'react'

export default class CommentCard extends Component {
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
      </div>
    )
  }
}
