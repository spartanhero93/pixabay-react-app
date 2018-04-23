import React, { Component } from 'react'
import Navbar from './Components/navbar/Navbar'
import Search from './Components/search/Search'
import Images from './Components/imageResults/Images'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Search />
        <Images />
      </div>
    )
  }
}

export default App
