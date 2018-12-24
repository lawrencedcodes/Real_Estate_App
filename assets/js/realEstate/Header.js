import React, * as react from 'react'

export default class Header extends react.Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
 
  render () {
      return (
          <header>
              <div className="logo">Sirius Realty</div>
              <nav>
                  <a href="#" >Create Ads</a>
                  <a href="#" >About Us</a>
                  <a href="#" >Login</a>
                  <a href="#" className="register-btn">Register</a>
              </nav>
          </header>
          )
  }
}

