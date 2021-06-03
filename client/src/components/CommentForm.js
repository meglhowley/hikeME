import React, { Component } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'

export default class CommentForm extends Component {
  constructor() {
    super()
    this.state = {
      rating: '',
      conditions: '',
      comment: ''
    }
  }

  postComment = async (res, req) => {
    res = await axios.post(`${BASE_URL}/api/trails/comment`, {
      trail_id: this.props.trail_id,
      rating: this.state.rating,
      conditions: this.state.conditions,
      comment: this.state.comment
    })
    console.log(res)
  }

  handleChangeRating = async (e) => {
    await this.setState({ rating: e.target.value })
  }

  handleChangeConditions = async (e) => {
    await this.setState({ conditions: e.target.value })
  }

  handleChangeComment = async (e) => {
    await this.setState({ comment: e.target.value })
  }

  handleSubmit = (e) => {
    this.postComment()
  }

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.rating}
            placeholder="rating"
            onChange={this.handleChangeRating}
          ></input>
          <input
            type="text"
            value={this.state.conditions}
            placeholder="weather conditions"
            onChange={this.handleChangeConditions}
          ></input>
          <input
            type="text"
            value={this.state.comment}
            placeholder="comment"
            onChange={this.handleChangeComment}
          ></input>
          <button>Add comment</button>
        </form>
      </div>
    )
  }
}
