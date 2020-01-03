import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import link from '../../link'

const getProduct = async (setProducts) => {
  const pros = await Axios.get(`${link}/api/product`);
  if(pros.data){
    setProducts(pros.data)
  }
}

const getCategory = async (setCategories) => {
  const cats = await Axios.get(`${link}/api/category`);
  if(cats.data){
    setCategories(cats.data)
  }
}

const getMe = async (setProfile) => {
  try {
    const profile = await Axios.get(`${link}/api/customar/me`);
    setProfile(profile.data)
  } catch (e) {
    console.log(e);

  }
}

const getBrands = async (setBrands) => {
  const res = await Axios.get(`${link}/api/shop`);
  setBrands(res.data.slice(0,5));
}

const DataHoc = (Children) => {

  return function GetValu(props){
    const [products,setProducts] = useState(null);
    const [categories,setCategories] = useState(null);
    const [profile,setProfile] = useState(null);
    const [brands,setBrands] = useState(null)
    const [up,setUp] = useState(true)

    useEffect(() => {
      if(up){
        getProduct(setProducts)
        getCategory(setCategories)
        getMe(setProfile);
        getBrands(setBrands)
        setUp(false)
      }
    })

    return (products && categories && profile && brands) && <Children match={props.match} products={products} categories={categories} setUp={setUp} profile={profile} brands={brands}/>
  }
}

export default DataHoc
