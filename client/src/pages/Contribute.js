import React, { Component } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'


class Contribute extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      length: '',
      elevationGain: '',
      location: '',
      difficulty: '',
      routeType: '',
      description: ''
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
    image: 'https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?size=626&ext=jpg',
    })
    this.props.history.push('/')
  }

  handleClick = (e) => {
    e.preventDefault()
    this.postRestaurants()
  }

  handleChangeName = async (e) => {
    await this.setState({ name: e.target.value })
  }

  handleChangeCategory = async (e) => {
    await this.setState({ category: e.target.value })
  }

  handleChangeMenuItem1Name = async (e) => {
    await this.setState((prevState) => ({
      menuItem1: {
        ...prevState.menuItem1,
        name: e.target.value
      }
    }))
  }

  handleChangeMenuItem1Price = async (e) => {
    await this.setState((prevState) => ({
      menuItem1: {
        ...prevState.menuItem1,
        price: e.target.value
      }
    }))
  }

  handleChangeMenuItem2Name = async (e) => {
    await this.setState((prevState) => ({
      menuItem2: {
        ...prevState.menuItem2,
        name: e.target.value
      }
    }))
  }

  handleChangeMenuItem2Price = async (e) => {
    await this.setState((prevState) => ({
      menuItem2: {
        ...prevState.menuItem2,
        price: e.target.value
      }
    }))
  }

  handleChangeMenuItem3Name = async (e) => {
    await this.setState((prevState) => ({
      menuItem3: {
        ...prevState.menuItem3,
        name: e.target.value
      }
    }))
  }

  handleChangeMenuItem3Price = async (e) => {
    await this.setState((prevState) => ({
      menuItem3: {
        ...prevState.menuItem3,
        price: e.target.value
      }
    }))
  }

  componentDidMount() {
    this.postRestaurants()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick} className="form-page">
          <div>
            <h3>what's your restaurants name?</h3>
            <TextInput
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
              name={'name'}
              placeholder={'name'}
            />
          </div>
          <div>
            <h3>what type of food do you make?</h3>
            <TextInput
              type="text"
              value={this.state.category}
              onChange={this.handleChangeCategory}
              name={'category'}
              placeholder={'category'}
            />
          </div>
          <div>
            <h3 className="menu-header">what's on the menu?</h3>
            <h4>item 1</h4>
            <TextInput
              type="text"
              value={this.state.menuItem1.name}
              onChange={this.handleChangeMenuItem1Name}
              name={'name'}
              placeholder={'menu item name'}
            />
          </div>
          <div>
            <h4>price</h4>
            <TextInput
              type="text"
              value={this.state.menuItem1['price']}
              onChange={this.handleChangeMenuItem1Price}
              name={'name'}
              placeholder={'price'}
            />
          </div>
          <div>
            <h4>item 2</h4>
            <TextInput
              type="text"
              value={this.state.menuItem2['name']}
              onChange={this.handleChangeMenuItem2Name}
              name={'name'}
              placeholder={'menu item name'}
            />
          </div>
          <div>
            <h4>price</h4>
            <TextInput
              type="text"
              value={this.state.menuItem2['price']}
              onChange={this.handleChangeMenuItem2Price}
              name={'name'}
              placeholder={'price'}
            />
          </div>
          <div>
            <h4>item 3</h4>
            <TextInput
              type="text"
              value={this.state.menuItem3['name']}
              onChange={this.handleChangeMenuItem3Name}
              name={'name'}
              placeholder={'Menu Item Name'}
            />
          </div>
          <div>
            <h4>price</h4>
            <TextInput
              type="text"
              value={this.state.menuItem3['price']}
              onChange={this.handleChangeMenuItem3Price}
              name={'name'}
              placeholder={'Price'}
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
