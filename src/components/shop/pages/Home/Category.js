import React from 'react'
import styled from 'styled-components';

const Category = ({cat}) => (
  <CategoryStyle className="col-md-3 m-3 card bg-light border-0 rounded-0 text-capitalize">
    <div className="card-body text-center d-flex align-items-center">
      <a style={{fontSize: 'x-large'}} href={`/shop/products/${cat.name.toLowerCase()}`} className="text-muted text-center h3">
        <span>{cat.name}</span>
      </a>
    </div>
  </CategoryStyle>
)

const CategoryStyle = styled.div`
  min-height: 100px;
  box-sizing: border-box;
  transition: .3s;
  &:hover{
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
  }
  .card-body{
    height: 100px;

    a{
      width: 100%;
      text-decoration: none;
    }
  }
`

export default Category
