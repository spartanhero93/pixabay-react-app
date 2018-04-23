import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

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
    amount: 15,
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '8781951-a1771870240ddf96dac845cec',
    images: []
  }

  onTextChange = event => {
    this.setState({ searchText: event.target.value })
  }

  render () {
    const { classes } = this.props
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
        <form className={classes.root} autoComplete='off'>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='age-simple'>Amount</InputLabel>
            <Select
              name='amount'
              value={this.state.amount}
              onChange={this.onAmountChange}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
        </form>
        <br />
      </div>
    )
  }
}

export default withStyles(styles)(Search)
