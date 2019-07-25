import React from 'react'
import PropTypes from 'prop-types'

const Color = (props) => {
  return (
    <div className="my-3">
      <h4 className="text-muted">Color</h4>
      <div className="d-flex row flex-row justify-content-left ml-3">
        {
          ['red','blue','yellow','black','white','lightblue','gray','brown'].map((i,key) => (
            <div style={{width: '25px',height: '25px',borderRadius: '100%',background: i,margin: '0 10px',cursor: 'pointer'}}></div>
          ))
        }
      </div>
      </div>
  )
}

export default Color
