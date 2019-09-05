import React,{useState,useEffect} from 'react'
import link from '../../../link'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Favorite from '@material-ui/icons/Favorite'
import Axios from 'axios'

const Brand = ({name,id}) => (
  <BrandStyle className="brand">
    <Link to={`/brand/${id}`}>{name}</Link>
  </BrandStyle>
)

const BrandStyle = styled.div`
  position: absolute;
  background: rgb(245,0,87);
  color: #ffffff;
  top: 22px;
  left: 20px;
  padding: 6px 20px;
  box-shadow: 0 0px 8px rgb(48, 48, 48);
  font-weight: 700;
  letter-spacing: 3px;

  a{
    color: #ffffff;
  }
`

const Brands = ({products,favourite}) => {
  return (
    <div className="my-3 card-columns py-4 px-3">
      {products.map((item,i)=> <BrandItem key={i} {...item} favourite={favourite}/>)}
      {products.length === 0 && <h4>Not Found</h4>}
    </div>
  )
}

const BrandItem = ({image,_id,title,price,shop,favourite}) => {
  const [isFavourite,setIsFavourite] = useState(null)
console.log(favourite);
  const getFavourite = async (e) => {
    const get = await Axios.post(`${link}/api/customar/favourite`,{product: _id})
    if(get) setIsFavourite(!isFavourite);
  }
  useEffect(() => {
    if(favourite){
      favourite.map(i => {
        if(i.product._id === _id){
          setIsFavourite(true);
        }
      })
    }
  },[])

  return (
    <div className="card border-0">
      <img src={`${link}/${image}`} className="card-img-top" alt="" />
      <div className="card-body text-center">
        <h5><a className="text-dark" href={`/product/${_id}`}>{title}</a></h5>
        <p><strong>${price}</strong></p>
          <div className="item-footer d-flex">
            <div className="w-50 ml-2 mt-2">
              <IconButton onClick={getFavourite} style={{color: isFavourite ? 'rgb(245,0,87)' : ''}}>
                <Favorite />
              </IconButton>
              <small style={{display: 'block',fontSize: '12px'}} className="text-muted">add to favourite</small>
            </div>
            <button style={{height: '30px'}} className="ml-auto btn btn-sm my-auto px-3">Buy now</button>
          </div>
      </div>
      <Brand name={shop.name} id={shop._id}/>
    </div>
  )
}

export default Brands
