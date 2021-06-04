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
      image: '',
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
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880528.4828970535!2d-71.22781786235342!3d45.16652391574985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb01dde1d538ad5%3A0xd679cc6f6720a8d0!2sMaine!5e0!3m2!1sen!2sus!4v1622825441820!5m2!1sen!2sus',
      difficulty: this.state.difficulty,
      routeType: this.state.routeType,
      description: this.state.description,
      image: this.state.image
        ? this.state.image
        : 'https://media.istockphoto.com/vectors/realistic-mountains-landscape-morning-wood-panorama-pine-trees-and-vector-id1150481340?k=6&m=1150481340&s=612x612&w=0&h=cvEgkS1M_V3a6gnzAK8h9z7UwouqQI6kXCmJRxWqvu4='
    })
    this.props.history.push('/search')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.createTrail()
    this.setState({ difficulty: '' })
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

  handleChangeImage = async (e) => {
    await this.setState({ image: e.target.value })
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
            id="trail-input"
            value={this.state.name}
            onChange={this.handleChangeName}
            name={'trail name'}
            placeholder={'trail name'}
          />
          <div>
            <input
              className="form-inputs-trail"
              type="text"
              id="length-input"
              value={this.state.length}
              onChange={this.handleChangeLength}
              name={'length'}
              placeholder={'length'}
            />
            <span>miles</span>
          </div>
          <div>
            <input
              className="form-inputs-trail"
              type="text"
              id="elevation-input"
              value={this.state.elevationGain}
              onChange={this.handleChangeElevationGain}
              name={'elevation gain'}
              placeholder={'elevation gain'}
            />
            <span>feet</span>
          </div>
          <div>
            <input
              className="form-inputs-trail"
              type="text"
              id="location-input"
              value={this.state.image}
              onChange={this.handleChangeImage}
              name={'location'}
              placeholder={'image url (optional)'}
            />
          </div>
          <div>
            <input
              onChange={() => {
                this.setState({ difficulty: 'easy' })
              }}
              type="radio"
              name="difficulty"
              id="1"
              className="radio"
              required
            />
            easy
            <input
              onChange={async (e) => {
                await this.setState({ difficulty: 'moderate' })
              }}
              type="radio"
              name="difficulty"
              id="1"
              className="radio"
              required
            />
            moderate
            <input
              onChange={() => {
                console.log('hello?')
                this.setState({ difficulty: 'hard' })
              }}
              type="radio"
              name="difficulty"
              id="1"
              className="radio"
              required
            />
            hard
          </div>
          <div>
            <input
              className="form-inputs-trail"
              type="text"
              id="description-input"
              value={this.state.description}
              onChange={this.handleChangeDescription}
              name={'description'}
              placeholder={'description'}
            />
          </div>
          <button className="submit-btn">submit</button>
        </form>
      </div>
    )
  }
}

export default Contribute
