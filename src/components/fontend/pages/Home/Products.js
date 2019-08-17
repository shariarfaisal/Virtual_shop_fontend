import React from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem';
import Filter from './Filter';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

const Products = ({products}) => {
  return (
    <BorderDisplayStyle id="product-display" className="col-12 col-md-10 mx-auto">
        <Filter />
        <div className="card-columns pb-5">
          {
            products.map((i,key) => <ProductItem  key={key} {...i}/>)
          }
        </div>
        <div className="my-3 text-center">
          <Button variant="contained" className="mx-auto px-3">more</Button>
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
