import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

const Products = ({products,profile}) => {
  const [limit,setLimit] = useState(10)
  return (
    <BorderDisplayStyle id="product-display" className="container">
      <div className="col-12">
        <div className="card-columns pb-5">
          {
            products.slice(0,limit).map((i,key) => <ProductItem  key={key} {...i} favourite={profile.favourite}/>)
          }
        </div>
        <div className="my-3 text-center">
          <Button onClick={e => setLimit(limit+10)} variant="contained" className="mx-auto px-3">more</Button>
        </div>
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
