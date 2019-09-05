import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import link from '../../../link';

const getProduct = async (id,setProduct) => {
  const pro = await Axios.get(`${link}/api/product/${id}`);
  setProduct(pro.data);
}

const ProductDetailsHoc = (Children) => {
  return function Get({match}){
    const [product,setProduct] = useState(null);

    useEffect(() => {
      getProduct(match.params.id,setProduct);
    },[])

    return product && <Children product={product}/>
  }
}

export default ProductDetailsHoc
