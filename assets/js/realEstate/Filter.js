import React, * as react from 'react'

export default class Filter extends react.Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
 
  render () {
      return (
          <section id="filter">
            <div className="inside">
                  <h4>Make Your Selection</h4>
                  <label htmlfor="city">City</label>
                  <select name="city" className="filters city" onChange={this.props.change}>
                      <option value="All">All</option>
                      <option value="San Francisco">San Francisco</option>
                      <option value="Oakland">Oakland</option>
                      <option value="Sacramento">Sacramento</option>
                      <option value="Palo Alto">Palo Alto</option>
                      <option value="San Mateo">San Mateo</option>
                      <option value="Redwood city">Redwood city</option>
                  </select>
                  <label htmlfor="homeType">Home Type</label>
                  <select name="homeType" className="filters homeType" onChange={this.props.change}>
                      <option value="All">All Homes</option>
                      <option value="Ranch">Ranch</option>
                      <option value="Colonial">Colonial</option>
                      <option value="Victorian">Victorian</option>
                      <option value="Craftsman">Craftsman</option>
                      <option value="Tudor">Tudor</option>
                  </select>
                  <label htmlfor="bedrooms">Bedrooms</label>
                  <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
                  <option value="0">0</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
              </select>
              <div className="filters price">
                  <span className="title">Price</span>
                      <input type="text" name="min_price" className="min_price" onChange={this.props.change} value={this.props.globalState.min_price}/>
                      <input type="text" name="max_price" className="max_price" onChange={this.props.change} value={this.props.globalState.max_price} />
              </div>
              <div className="filters floor-space">
                  <span className="title">Floor Space</span>
                  <input type="text" name="min_floor_space" className="min_floor_space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
                  <input type="text" name="max_floor_space" className="max_floor_space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
              </div>
              <div className="filters amenities">
                    <span className="title">Amenities</span>     
                      <label htmlfor="amenitites"><span>Elevators</span><input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} /></label>
                      <label htmlfor="amenitites"><span>Swimming Pool</span><input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change}  /></label>
                      <label htmlfor="amenitites"><span>Finished Basement</span><input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change} /></label>
                    <label htmlfor="amenitites"><span>Gym</span><input name="gym" value="gym" type="checkbox" onChange={this.props.change} /></label>
              </div>
            </div>
          </section>
          )
  }
}

