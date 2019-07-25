import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
  return (
    <form className="form-inline my-2 my-lg-0 ml-auto">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
}

export default Search
