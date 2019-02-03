import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from '@material-ui/icons/ZoomIn'
import Button from 'material-ui/Button'
import Dialog from 'material-ui/Dialog'
import { DialogActions } from 'material-ui'

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ``,
  }

  handleOpen = img => {
    this.setState({ open: true, currentImg: img })
  }
  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    let imageListContent
    const { images } = this.props

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
                  <IconButton
                    color='primary'
                    onClick={() => this.handleOpen(img.largeImageURL)}
                  >
                    <ZoomIn />
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
        <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose}>
          <img src={this.state.currentImg} alt={``} style={{ width: `100%` }} />
          <DialogActions>
            <Button primary onClick={this.handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
}

export default ImageResults
