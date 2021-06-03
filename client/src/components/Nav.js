import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <NavLink className="nav-link" to="/">
            home
          </NavLink>
          •
          <NavLink className="nav-link" to="/search">
            search
          </NavLink>
          •
          <NavLink className="nav-link" to="/contribute">
            contribute trail
          </NavLink>
        </div>
      </nav>
    )
  }
}
