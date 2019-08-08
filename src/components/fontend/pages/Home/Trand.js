import React,{useState,useContext} from 'react'
import ProductItem from './ProductItem';
import styled from 'styled-components';
import {ThemeContext} from '../../context/ThemeContext'


const Trand = ({products}) => {
    const theme = useContext(ThemeContext)
  // const [products,setProducts] = useState([])
  return (
    <TrandStyle className="col-12 bg-light">
    <h1 className="text-center my-3" style={theme.h1}>Most Popular</h1>
      <div className="card-columns">
        {products.map((i,key) => <ProductItem key={key} {...i}/>)}
      </div>
    </TrandStyle>
  )
}


const TrandStyle = styled.div`
  .card{
    border-radius: 0;
  }
`
export default Trand
