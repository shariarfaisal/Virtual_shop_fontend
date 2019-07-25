import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = (props) => {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Home</li>
      <li className="breadcrumb-item">Computer</li>
      <li className="breadcrumb-item active">Bootstrap</li>
    </ol>
  )
}

export default Breadcrumb
