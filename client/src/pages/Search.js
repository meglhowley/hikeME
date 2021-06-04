import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import BASE_URL from '../globals'
import e from 'cors'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      trails: [],
      comments: [],
      searchedName: '',
      searchResults: [],
      searched: false
    }
  }
  getTrails = async () => {
    const res = await axios.get(`${BASE_URL}/api/trails`)
    this.setState({ trails: res.data })
  }

  moreTrailInfo = (trail) => {
    this.props.history.push(`/search/more-info/${trail._id}`)
  }

  compareSearch = () => {
    this.state.trails.forEach((trail) => {
      const trailName = trail.name.toUpperCase()
      const searchedTrail = this.state.searchedName.toUpperCase()
      if (trailName.includes(searchedTrail)) {
        this.state.searchResults.push(trail)
        let searchResults = this.state.searchResults
        this.setState({ searchResults })
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.searchedName)
    console.log(this.state.trails)
    console.log('submitted!')
    this.compareSearch()
    this.setState({ searched: true })
    this.state.searchedName = ''
  }

  handleChange = async (e) => {
    await this.setState({ searchedName: e.target.value })
    console.log(this.state.searchedName)
    this.setState({ searchResults: [] })
    this.setState({ searched: false })
  }

  componentDidMount() {
    this.getTrails()
    this.setState({ searchedResults: [] })
    document.body.style.background = 'none'
    document.body.style.backgroundColor = 'rgba(247, 242, 237)'
    document.body.style.marginRight = '0px'
  }

  render() {
    return (
      <body>
        <header className="header-div">
          <Nav />
          <form onSubmit={this.handleSubmit}>
            <input
              className="search-input"
              type="text"
              placeholder="search trails"
              value={this.state.searchedName}
              onChange={this.handleChange}
            />
            <input type="submit" style={{ display: 'none' }} />
          </form>
        </header>
        <div className="main-search-div">
          {!this.state.searched
            ? this.state.trails.map((trail) => (
                <div
                  onClick={() => this.moreTrailInfo(trail)}
                  key={trail._id}
                  className="trail-container"
                >
                  <div className="trail-text">
                    <img className="trail-image" src={trail.image}></img>
                    <br />
                    <h1>{trail.name}</h1>
                    <div className="length-route">
                      <span>Length: {trail.length} miles</span>
                      <span id="route">|| Route Type: {trail.routeType}</span>
                    </div>
                    <div
                      className="difficulty"
                      style={{
                        backgroundColor:
                          trail.difficulty === 'hard'
                            ? 'rgb(173, 62, 62)'
                            : trail.difficulty === 'moderate'
                            ? 'rgb(250, 191, 65)'
                            : 'rgb(113, 173, 114)'
                      }}
                    >
                      {' '}
                      <h2 className="difficulty-text">{trail.difficulty}</h2>
                    </div>
                  </div>
                </div>
              ))
            : this.state.searchResults.map((trail) => (
                <div
                  onClick={() => this.moreTrailInfo(trail)}
                  key={trail._id}
                  className="trail-container"
                >
                  <div className="trail-text">
                    <img className="trail-image" src={trail.image}></img>
                    <br />
                    <h1>{trail.name}</h1>
                    <div className="length-route">
                      <span>Length: {trail.length} miles</span>
                      <span id="route">|| Route Type: {trail.routeType}</span>
                    </div>
                    <div
                      className="difficulty"
                      style={{
                        backgroundColor:
                          trail.difficulty === 'hard'
                            ? 'rgb(173, 62, 62)'
                            : trail.difficulty === 'moderate'
                            ? 'rgb(250, 191, 65)'
                            : 'rgb(113, 173, 114)'
                      }}
                    >
                      <h2 className="difficulty-text">{trail.difficulty}</h2>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </body>
    )
  }
}
