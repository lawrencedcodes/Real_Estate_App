import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
 
  render () {
      return (
          <section className="listings">
              <section className="search-area">
                  <input type="text" name="search" />
              </section>
              <section className="sort-by-area">
                  <div>
                      450 results found
                  </div>
                  <div className="sort-options">
                      <select name="sort-by" className="sort-by">
                          <option value="price-asc">Highest Price</option>
                          <option value="price-asc">Lowest Price</option>
                      </select>
                      <div className="view">
                          <i className="fas fa-th-list" aria-hidden="true"></i>
                          <i className="fas fa-th" aria-hidden="true"></i>
                      </div>
                  </div>
              </section>
              <section className="listings-results">

              </section>
              <section className="pagination">

              </section>
          </section>
          )
  }
}

