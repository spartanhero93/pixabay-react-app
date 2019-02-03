import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import axios from 'axios'
import ImageResults from '../imageResults/ImageResults'

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '8781951-a1771870240ddf96dac845cec',
    images: [],
  }

  onTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      target.value === '' ? this.setState({ images: [] }) : this.apiCall()
    })
  }

  apiCall = async () => {
    try {
      const { data } = await axios.get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
          this.state.searchText
        }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
      )
      this.setState({ images: data.hits })
    } catch (error) {
      console.error(error)
    }
  }

  onAmountChange = event => {
    this.setState({ amount: event.target.value }, () => this.apiCall())
  }

  render() {
    const { classes } = this.props
    const { amount, searchText } = this.state
    return (
      <div style={{ padding: '1rem' }}>
        <TextField
          name='searchText'
          value={searchText}
          onChange={this.onTextChange}
          label='search for images!'
          fullWidth
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='age-simple'>Amount</InputLabel>
          <Select value={amount} onChange={this.onAmountChange}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        <br />
        <ImageResults images={this.state.images} />
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
  },
})

export default withStyles(styles)(Search)
