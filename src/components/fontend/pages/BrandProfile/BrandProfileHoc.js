import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import link from '../../../link';
import {withRouter} from 'react-router-dom'
import DataHoc from '../DataHoc'

const getBrand = async (id,setBrand) => {
  const brand = await Axios.get(`${link}/api/shop/${id}`)
  if(brand.data){
    setBrand(brand.data);
  }
}

const categoryFilter = (categories,products) => {
  return categories.filter(cat => {
    return products.find(i => i.category === cat._id)
  })
}

const productFilter = (products,brandId) => {
  return  products.filter(i => {
    return i.shop._id === brandId
  })
}

const productFilterWithCategory = (products,brandId,categoryId) => {
  return  products.filter(i => {
    return (i.shop._id === brandId) && (i.category === categoryId)
  })
}

const BrandProfileHoc = (Children) => {
   function GetReturn(props){
    const [brand,setBrand] = useState(null);
    useEffect(() => {
      getBrand(props.match.params.brandId,setBrand);
    },[])

    return brand && <Children
            brand={brand}
            catFilter={categoryFilter}
            proFilter={productFilter}
            proFWC={productFilterWithCategory}
            catId={props.match.params.catId}
            brandId={props.match.params.brandId}
            products={props.products}
            categories={props.categories}
          />
  }
  return withRouter(DataHoc(GetReturn))
}

export default BrandProfileHoc
