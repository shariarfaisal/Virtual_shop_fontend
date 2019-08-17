import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import link from '../../../link';

const getFavourits = async (setProducts) => {
  const products = await Axios.get(`${link}/api/customar/me`)
  if(products){
    setProducts(products.data.favourite)
  }
}

const getBrands = async (setBrands) => {
  const brand = await Axios.get(`${link}/api/shop`)
  if(brand){
    setBrands(brand.data)
  }
}

const brandAddition = (products,brands) => {
  if(products && brands){
    products.map(pro => {
      const brand = brands.find(i => i._id === pro.product.shop)
      pro.product.shop = brand;
    })
    console.log(products);
  }
}

const FavouriteHoc = (Children) => {
  return function Get(){
    const [products,setProducts] = useState(null);
    const [brands,setBrands] = useState(null);
    brandAddition(products,brands)
    useEffect(() => {
      getFavourits(setProducts)
      getBrands(setBrands)
    },[])

    return products && brands && <Children products={products} brands={brands}/>
  }
}

export default FavouriteHoc
