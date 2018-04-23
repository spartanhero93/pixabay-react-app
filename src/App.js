import React, { Component } from 'react'
import Navbar from './Components/navbar/Navbar'
import Search from './Components/search/Search'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Search />
      </div>
    )
  }
}

export default App
