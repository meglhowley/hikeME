import React, { Component } from 'react'
import Nav from '../components/Nav'

export default class Home extends Component {
  handleClick = () => {
    this.props.history.push('/search')
  }

  componentDidMount() {
    document.body.style.background =
      "url('https://wallpapercave.com/wp/wp4117321.jpg')"
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
  }

  render() {
    return (
      <body>
        <Nav />
        <div className="home-container">
          <div className="hike-me">
            <img
              className="map-img"
              src="https://i.imgur.com/0A1mYlO.png"
            ></img>
            hike•ME
            <br />
            <button onClick={this.handleClick} className="explore-btn">
              explore now
            </button>
          </div>
          <button
            onClick={() => {
              this.props.history.push('/lunar_calendar')
            }}
            className="galaxy-mode"
          >
            galaxymode
          </button>
        </div>
      </body>
    )
  }
}
