// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResults = destinationList.filter(eachDestination =>
      eachDestination.name.includes(searchInput),
    )

    return (
      <div className="destination-app-container">
        <div className="search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              className="search-input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search-icon"
              className="search-icon"
            />
          </div>

          <ul className="destination-list-items">
            {searchResults.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
