import React from 'react'
import styled from 'styled-components';

const CategoryDisplay = ({products,categories,categoryFilter,productFilter,brandId}) => {
  return (
    <div className="col-md-3">
      <div className="card border-0 rounded-0">
        
        <StyleCategoris className="card-body">
          <ul className="nav mx-auto d-flex flex-column">
            {
              categories && categoryFilter(categories,productFilter(products,brandId)).map((i,key) => (
                <li key={key} className="nav-item"><a href={`/brand/${brandId}/${i._id}`} className="nav-link text-dark">{i.name}</a></li>
              ))
            }
          </ul>
        </StyleCategoris>
      </div>
    </div>
  )
}

const StyleCategoris = styled.div`

  ul li a{
    border-radius: 100px;
    font-weight: 600;
  }
  ul li:hover a{
    background: rgba(0,0,0,.03);
  }
`

export default CategoryDisplay
