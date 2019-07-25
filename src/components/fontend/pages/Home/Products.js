import React from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem'
const Products = (props) => {
  return (
    <BorderDisplayStyle id="product-display" className="col-8 mx-auto">
        <div className="row pb-5">
          {
            [1,2,3,4,5,6,].map((i,key) => <ProductItem cols="4" key={key} />)
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
