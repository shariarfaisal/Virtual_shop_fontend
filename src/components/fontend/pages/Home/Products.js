import React from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem'

const Products = ({products}) => {
  return (
    <BorderDisplayStyle id="product-display" className="col-12 mx-auto">
        <div className="row pb-5">
          {
            products.map((i,key) => <ProductItem cols="3" key={key} {...i}/>)
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
