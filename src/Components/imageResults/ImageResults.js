import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from '@material-ui/icons/ZoomIn'
import InfoIcon from '@material-ui/icons/Info'

class ImageResults extends Component {
  render () {
    let imageListContent
    const images = this.props.images

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt='' />
              <GridListTileBar
                title={img.tags}
                subtitle={<span>by: {img.user}</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
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

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageResults
