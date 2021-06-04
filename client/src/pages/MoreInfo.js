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
    document.body.style.background =
      "url('https://free4kwallpapers.com/uploads/originals/2016/06/01/jordan-pondacadia-national-park-maine-usa-wallpaper.jpg')"
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
  }

  render() {
    console.log(this.state.commentIds)
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2932912.4757996458!2d-72.0626807!3d44.1210673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cbac339f9023783%3A0x785cdbabea23bd6f!2sChimney%20Pond%20Trail%2C%20Millinocket%2C%20ME%2004462!5e0!3m2!1sen!2sus!4v1622777398858!5m2!1sen!2sus"
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
