import React from 'react'
import styled from 'styled-components'

const Filter = (props) => {
  return (
    <StyleFilter className="p-2 mb-3 d-flex bg-light">
      <div className="form-group my-auto">
        <select title="limit product display per page" className="form-control rounded-0">
          <option>limit</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
        </select>
      </div>
    </StyleFilter>
  )
}

const StyleFilter = styled.div`
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
    min-height: 50px;
    .form-control{
      box-shadow: none;
      cursor: pointer;
    }
    input:focus{
      box-shadow: 0;
      outline: 0;
    }
    select:focus{
        box-shadow: 0;
        outline: 0;
    }
`

export default Filter
