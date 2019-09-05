import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import link from '../../../link';

const getProducts = async (setProducts,shopId,catId) => {
  let pro = await Axios.get(`${link}/api/product`)
  pro = pro.data.filter(i => {
    return (i.shop._id == shopId) && (i.category === catId)
  });
  setProducts(pro);
}

const getProfile = async (setFavourites) => {
  const fav = await Axios.get(`${link}/api/customar/me`)
  setFavourites(fav.data.favourite);
}

const AlsoLikeHoc = (Children) => {
  return function Get(props){
    const [products,setProducts] = useState(null)
    const [favourites,setFavourites] = useState([])

    useEffect(() =>{
      getProfile(setFavourites);
      getProducts(setProducts,props.shopId,props.catId);
    },[])

    return products && favourites && <Children products={products} favourites={favourites}/>
  }
}

export default AlsoLikeHoc
