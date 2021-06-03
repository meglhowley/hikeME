import React, { Component } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'
import Nav from '../components/Nav'

class Contribute extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      length: '',
      elevationGain: '',
      location: '',
      difficulty: 'test',
      routeType: 'test',
      description: ''
    }
  }

  createTrail = async (res, req) => {
    res = await axios.post(`${BASE_URL}/api/trails/create`, {
      name: this.state.name,
      length: this.state.length,
      elevationGain: this.state.elevationGain,
      location: this.state.location,
      difficulty: this.state.difficulty,
      routeType: this.state.routeType,
      description: this.state.location,
      image:
        'https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?size=626&ext=jpg'
    })
    this.props.history.push('/search')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.createTrail()
  }

  handleChangeName = async (e) => {
    await this.setState({ name: e.target.value })
    console.log(e.target.value)
  }

  handleChangeLength = async (e) => {
    await this.setState({ length: e.target.value })
    console.log(e.target.value)
  }

  handleChangeElevationGain = async (e) => {
    await this.setState({ elevationGain: e.target.value })
    console.log(e.target.value)
  }

  handleChangeLocation = async (e) => {
    await this.setState({ location: e.target.value })
    console.log(e.target.value)
  }

  handleChangeDescription = async (e) => {
    await this.setState({ description: e.target.value })
    console.log(e.target.value)
  }

  componentDidMount() {
    document.body.style.background =
      "url('https://picjumbo.com/wp-content/uploads/snowy-mountain-peak-with-sunrise-glow-2210x1243.jpg')"
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="thank-you-div">
          <h1 className="thank-you-text">thank you</h1>
          <div className="p-thank-you">
            <p>
              For contributing to our collection. Our community's contributions
              help to ensure we stay relevant and up-to-date. Please tell us
              more about your trail-less-traveled:
            </p>
          </div>
        </div>
        <form className="form-trail" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-inputs-trail"
            value={this.state.name}
            onChange={this.handleChangeName}
            name={'trail name'}
            placeholder={'trail name'}
          />
          <div>
            <input
              className="form-inputs-trail"
              type="text"
              value={this.state.length}
              onChange={this.handleChangeLength}
              name={'length'}
              placeholder={'length (in miles)'}
            />
            <span>miles</span>
          </div>
          <div>
            <input
              className="form-inputs-trail"
              type="text"
              value={this.state.elevationGain}
              onChange={this.handleChangeElevationGain}
              name={'elevation gain'}
              placeholder={'elevation gain (in feet)'}
            />
            <span>feet</span>
          </div>
          <div>
            <input
              className="form-inputs-trail"
              type="text"
              value={this.state.location}
              onChange={this.handleChangeLocation}
              name={'location'}
              placeholder={'Google Maps trailhead link (if you have it!)'}
            />
          </div>
          <div>
            <input
              className="form-inputs-trail"
              type="text"
              value={this.state.description}
              onChange={this.handleChangeDescription}
              name={'description'}
              placeholder={'description'}
            />
          </div>
          <button id="form-button" className="submit-btn">
            submit
          </button>
        </form>
      </div>
    )
  }
}

export default Contribute
