import React, { Component } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'
import Nav from '../components/Nav'
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'
import { Redirect } from 'react-router'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      trail: [],
      commentIds: [],
      comments: [],
      trail_id: ''
    }
  }

  getTrails = async () => {
    const res = await axios.get(
      `${BASE_URL}/api/trails/search/${this.props.match.params.id}`
    )
    this.setState({ trail: res.data })
    this.setState({ commentIds: res.data.comments })
    this.setState({ trail_id: this.props.match.params.id })
  }

  getAllComments = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/trails/comment/search`)
    this.setState({ comments: res.data })
  }

  deleteTrail = async () => {
    console.log(this.state.trail_id)
    const res = await axios.delete(
      `${BASE_URL}/api/trails/delete/${this.state.trail_id}`
    )
    this.props.history.push('/search')
    console.log('deleted!')
  }

  componentDidMount() {
    this.getTrails()
    this.getAllComments()
  }

  render() {
    console.log(this.state.commentIds)
    return (
      <div>
        <Nav />
        <h1>{this.state.trail.name}</h1>
        <button onClick={this.deleteTrail}>delete</button>
        <br />
        <img className="more-info-img" src={this.state.trail.image}></img>
        <CommentForm trail_id={this.state.trail_id} />
        <CommentList {...this.state} />
      </div>
    )
  }
}
