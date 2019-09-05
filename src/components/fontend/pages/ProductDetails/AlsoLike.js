import React from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import AlsoLikeHoc from './AlsoLikeHoc'

const AlsoLike = ({products,favourites}) => {
  return (
    <div className="col-12 py-3">
      <h3 className="my-4 ml-5">You may also like</h3>
      <LikeStyle className="li-pro m-3 py-4 justify-content-center" style={{display: 'flex',flexWrap: 'nowrap',overflowX: 'auto'}}>
        {
          products.map((i,key) => {
            return <ProductItem key={key} {...i} favourites={favourites}/>
          })
        }
      </LikeStyle>
    </div>
  )
}

const LikeStyle = styled.div`
::-webkit-scrollbar {
  height: 4px;

}
::-webkit-scrollbar-track {
  background: #e3e3e3;

}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export default AlsoLikeHoc(AlsoLike)
