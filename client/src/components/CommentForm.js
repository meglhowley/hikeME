import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

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
          <div className="rating-weather-header">
            <input
              onChange={() => {
                this.setState({ rating: '1' })
              }}
              type="radio"
              name="rating"
              className="radio"
              required
            />
            1
            <input
              onChange={() => {
                this.setState({ rating: '2' })
              }}
              type="radio"
              name="rating"
              className="radio"
              required
            />
            2
            <input
              onChange={() => {
                this.setState({ rating: '3' })
              }}
              type="radio"
              name="rating"
              className="radio"
              required
            />
            3
            <input
              onChange={() => {
                this.setState({ rating: '4' })
              }}
              type="radio"
              name="rating"
              className="radio"
              required
            />
            4
            <input
              onChange={() => {
                this.setState({ rating: '5' })
              }}
              type="radio"
              name="rating"
              className="radio"
              required
            />
            5 ★ s
            <input
              className="form"
              id="weather"
              type="text"
              value={this.state.conditions}
              placeholder="weather conditions"
              onChange={this.handleChangeConditions}
            ></input>
          </div>
          <input
            id="comment-input"
            className="form"
            type="text"
            className="comment-box"
            value={this.state.comment}
            placeholder="comment"
            onChange={this.handleChangeComment}
          ></input>
          <button id="add-comment" className="form">
            Add comment
          </button>
        </form>
      </div>
    )
  }
}
