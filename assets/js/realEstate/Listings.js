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
          <section id="listings">
              <section className="search-area">
                  <input type="text" name="search" />
              </section>
              <section className="sort-by-area">
                  <div className="results">
                      135 results found
                  </div>
                  <div className="sort-options">
                      <select name="sort-by" className="sort-by">
                          <option value="price-asc">Highest Price</option>
                          <option value="price-asc">Lowest Price</option>
                      </select>
                      <div className="view">
                          <i className="fa fa-th-list" aria-hidden="true"></i>
                          <i className="fa fa-th" aria-hidden="true"></i>
                      </div>
                  </div>
              </section>
              <section className="listings-results">
                  <div className="col-md-3">
                  <div className="listing">
                      <div className="listing-img">
                          <span className="address">9 St Claire Cv</span>
                          <div className="details">
                              <div className="col-md-3">
                                  <div className="user-img"></div>
                              </div>
                              <div className="col-md-9">
                                  <div className="user-details">
                                      <span className="user-name">Nina Lockhart</span>
                                      <span className="post-date">12.23.18</span>
                                  </div>
                                  <div className="listing-details">
                                      <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>21,000 ft&sup2;</span></div>
                                      <div className="bedrooms">
                                          <i className="fa fa-bed" aria-hidden="true"></i>
                                          <span>6 bedrooms</span>
                                      </div>
                                  </div>
                                  <div className="view-btn">
                                      View Listing
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="bottom-info">
                          <span className="price">$8500 /month</span>
                          <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Sacramento, CA</span>
                      </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="listing">
                          <div className="listing-img">
                              <span className="address">9 St Claire Cv</span>
                              <div className="details">
                                  <div className="col-md-3">
                                      <div className="user-img"></div>
                                  </div>
                                  <div className="col-md-9">
                                      <div className="user-details">
                                          <span className="user-name">Nina Lockhart</span>
                                          <span className="post-date">12.23.18</span>
                                      </div>
                                      <div className="listing-details">
                                          <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>21,000 ft&sup2;</span></div>
                                          <div className="bedrooms">
                                              <i className="fa fa-bed" aria-hidden="true"></i>
                                              <span>6 bedrooms</span>
                                          </div>
                                      </div>
                                      <div className="view-btn">
                                          View Listing
                                  </div>
                                  </div>
                              </div>
                          </div>
                          <div className="bottom-info">
                              <span className="price">$8500 /month</span>
                              <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Sacramento, CA</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="listing">
                          <div className="listing-img">
                              <span className="address">9 St Claire Cv</span>
                              <div className="details">
                                  <div className="col-md-3">
                                      <div className="user-img"></div>
                                  </div>
                                  <div className="col-md-9">
                                      <div className="user-details">
                                          <span className="user-name">Nina Lockhart</span>
                                          <span className="post-date">12.23.18</span>
                                      </div>
                                      <div className="listing-details">
                                          <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>21,000 ft&sup2;</span></div>
                                          <div className="bedrooms">
                                              <i className="fa fa-bed" aria-hidden="true"></i>
                                              <span>6 bedrooms</span>
                                          </div>
                                      </div>
                                      <div className="view-btn">
                                          View Listing
                                  </div>
                                  </div>
                              </div>
                          </div>
                          <div className="bottom-info">
                              <span className="price">$8500 /month</span>
                              <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Sacramento, CA</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="listing">
                          <div className="listing-img">
                              <span className="address">9 St Claire Cv</span>
                              <div className="details">
                                  <div className="col-md-3">
                                      <div className="user-img"></div>
                                  </div>
                                  <div className="col-md-9">
                                      <div className="user-details">
                                          <span className="user-name">Nina Lockhart</span>
                                          <span className="post-date">12.23.18</span>
                                      </div>
                                      <div className="listing-details">
                                          <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>21,000 ft&sup2;</span></div>
                                          <div className="bedrooms">
                                              <i className="fa fa-bed" aria-hidden="true"></i>
                                              <span>6 bedrooms</span>
                                          </div>
                                      </div>
                                      <div className="view-btn">
                                          View Listing
                                  </div>
                                  </div>
                              </div>
                          </div>
                          <div className="bottom-info">
                              <span className="price">$8500 /month</span>
                              <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Sacramento, CA</span>
                          </div>
                      </div>
                  </div>

              </section>
              <section className="pagination">
                  <ul className="pages">
                      <li>Prev</li>
                      <li className="active">1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>Next</li>
                  </ul>
              </section>
          </section>
          )
  }
}

