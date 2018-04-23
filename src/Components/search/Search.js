import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import axios from 'axios'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200
  }
})

class Search extends Component {
  state = {
    searchText: '',
    amount: '',
    apiUrl: 'https://pixabay.com/api',
    apiKey: '8781951-a1771870240ddf96dac845cec',
    images: []
  }

  onTextChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    this.apiCall()
  }

  apiCall = () => {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
      )
      .then(res => {
        this.setState({ images: res.data.hits })
      })
  }

  onAmountChange = event => {
    this.setState({ amount: event.target.value })
  }

  render () {
    const { classes } = this.props
    console.log(this.state.images)

    return (
      <div style={{ padding: '1rem' }}>
        <TextField
          name='searchText'
          value={this.state.searchText}
          onChange={this.onTextChange}
          label='search for images!'
          fullWidth
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='age-simple'>Amount</InputLabel>
          <Select value={this.state.amount} onChange={this.onAmountChange}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        <br />
      </div>
    )
  }
}

export default withStyles(styles)(Search)
