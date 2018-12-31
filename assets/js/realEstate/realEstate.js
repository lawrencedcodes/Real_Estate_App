import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './Data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
        name: 'Lawrence',
        listingsData,
        min_price: 0,
        max_price: 100000000,
        min_floor_space: 0,
        max_floor_space: 25000,
        elavator: false,
        swimming_pool: false,
        finished_basement: false,
        gym: false,
        filteredData: listingsData
      }
      this.change = this.change.bind(this)
      this.filteredData = this.filteredData.bind(this)
  }
    change(event) {
        let name = event.target.name
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value 
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state)
        })
    }
    filteredData() {

    }
  render () {
      return (
          <div>
              <Header />
              <section id="content-area">
                  <Filter change={this.change} globalState={this.state} />
                  <Listings listingsData={this.state.filteredData} />
              </section>
          </div>
          )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
