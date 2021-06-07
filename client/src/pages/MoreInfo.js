import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
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
    const res = await axios.delete(
      `${BASE_URL}/api/trails/delete/${this.state.trail_id}`
    )
    this.props.history.push('/search')
  }

  componentDidMount() {
    this.getTrails()
    this.getAllComments()
    document.body.style.background =
      "url('https://windows10spotlight.com/wp-content/uploads/2020/11/aa02d2d73e12d01dca40f44a35871269.jpg')"
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="more-info-container">
          <h1 className="more-info-name">{this.state.trail.name}</h1>
          <div className="spans">
            <span className="stat">Length</span>{' '}
            <span className="result">{this.state.trail.length} miles </span>
            <span className="stat">|| Elevation Gain</span>{' '}
            <span className="result">
              {this.state.trail.elevationGain} feet
            </span>
            <span className="stat">|| Route Type</span>{' '}
            <span className="result">{this.state.trail.routeType}</span>
          </div>
          <img className="more-info-img" src={this.state.trail.image}></img>
          <div className="more-info-details-div">
            <div className="description">
              <u>Description:</u>
              <br /> {this.state.trail.description}
            </div>
          </div>
          {/* <button className="delete-btn" onClick={this.deleteTrail}>
            delete trail
          </button> */}
          <div className="google-maps">
            <iframe
              src={`${this.state.trail.location}`}
              width="600"
              height="200"
            ></iframe>
          </div>
          <CommentForm trail_id={this.state.trail_id} />
          <CommentList {...this.state} />
        </div>
      </div>
    )
  }
}
