import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = (props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb" style={{background: 'inherit'}}>
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
