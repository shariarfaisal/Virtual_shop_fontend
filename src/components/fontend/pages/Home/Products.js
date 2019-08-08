import React from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem'

const Products = ({products}) => {
  return (
    <BorderDisplayStyle id="product-display" className="col-12 col-md-10 mx-auto">
      <div className="py-2 mb-2 d-flex bg-light">
        <div className="input-group input-group-sm ml-auto" style={{width: '200px'}}>
          <input type="text" placeholder="search" className="form-control" />
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary" name="button">Search</button>
          </div>
        </div>
      </div>
        <div className="card-columns pb-5">
          {
            products.map((i,key) => <ProductItem  key={key} {...i}/>)
          }
        </div>
    </BorderDisplayStyle>
  )
}

const BorderDisplayStyle = styled.div`
  .card{
    border-radius: 0;
    .card-img-top{
      border-radius: 0;
    }
    .card-body{
      button{
        border-radius: 100px;
      }
      button:focus{
        outline: 0;
      }
      .item-footer{

      }
    }
  }
`

export default Products
