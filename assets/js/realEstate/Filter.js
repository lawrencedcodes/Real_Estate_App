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
              <select name="neighborhood" className="filters neighborhood">
                      <option>San Francisco</option>
                      <option>Oakland</option>
                      <option>Sacramento</option>
                      <option>Palo Alto</option>
                      <option>San Mateo</option>
                      <option>Redwood City</option>
              </select>
              <select name="housetype" className="filters housetype">
                      <option>Ranch</option>
                      <option>Colonial</option>
                      <option>Victorian</option>
                      <option>Craftsman</option>
                      <option>Tudor</option>
              </select>
              <select name="bedrooms" className="filters bedrooms">
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
              </select>
              <div className="filters price">
                  <span className="title">Price</span>
                  <input type="text" name="min-price" className="min-price" />
                  <input type="text" name="max-price" className="max-price" />
              </div>
              <div className="filters floor-space">
                  <span className="title">Floor Space</span>
                  <input type="text" name="min-floor-space" className="min-floor-space" />
                  <input type="text" name="max-floor-space" className="max-floor-space" />
              </div>
              <div className="filters amenities">
                  <span className="title">Amenities</span>     
                  <label for="amenitites"><span>Elevators</span><input name="amenities" value="elevator" type="checkbox" /></label>
                  <label for="amenitites"><span>Swimming Pool</span><input name="amenities" value="swimming-pool" type="checkbox" /></label>
                  <label for="amenitites"><span>Finished Basement</span><input name="amenities" value="finished-basement" type="checkbox" /></label>
                  <label for="amenitites"><span>Gym</span><input name="gym" value="gym" type="checkbox" /></label>
              </div>
            </div>
          </section>
          )
  }
}

