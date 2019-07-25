import React from 'react'
import PropTypes from 'prop-types'

const ColorButton = ({color}) => (
  <button className='btn btn-sm m-2 text-light' style={{background: color}}>{color}</button>
)

const FilterColor  = ({colors}) => (
  <div className="my-2">
    <h5 className="text-secondary">Color</h5>
    <div>
      {
        colors.map((i,key) => <ColorButton key={key} color={i} />)
      }
    </div>
  </div>
)

export default FilterColor
