import React,{useEffect} from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem';

const brandAddition = (products,brands) => {
  if(products && brands){
    products.map(pro => {
      const brand = brands.find(i => i._id === pro.product.shop)
      pro.product.shop = brand;
    })
    console.log(products);
  }
}

const Products = ({products,brands}) => {
  brandAddition(products,brands)

  return (
    products && <BorderDisplayStyle id="product-display" className="col-12 col-md-10 mx-auto">
        <div className="card-columns pb-5">
          {
            products.map((i,key) => <ProductItem  key={key} {...i.product}/>)
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
