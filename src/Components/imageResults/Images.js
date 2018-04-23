import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from '@material-ui/icons/ZoomIn'

class Images extends Component {
  render () {
    let imageListContent
    const { images } = this.props

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <ZoomIn color='white' />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt='' />
            </GridTile>
          ))}
        </GridList>
      )
    } else {
      imageListContent = null
    }

    return (
      <div>
        {imageListContent}
      </div>
    )
  }
}

Image.propTypes = {
  images: PropTypes.array.isRequired
}

export default Images
