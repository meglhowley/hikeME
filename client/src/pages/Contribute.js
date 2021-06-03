import React, { Component } from 'react'
import axios from 'axios'

class Contribute extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      category: '',
      img: 'https://i.imgur.com/OXz83JJ.jpg',
      menuItem1: { name: '', price: '' },
      menuItem2: { name: '', price: '' },
      menuItem3: { name: '', price: '' }
    }
  }

  postRestaurants = async (res, req) => {
    res = await axios.post(`http://localhost:3001/api/restaurants`, {
      name: this.state.name,
      img: this.state.img,
      distance: '0.1 miles',
      category: this.state.category,
      rating: 'TBD',
      menuItem1: this.state.menuItem1,
      menuItem2: this.state.menuItem2,
      menuItem3: this.state.menuItem3
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
