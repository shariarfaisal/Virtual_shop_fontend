import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import link from '../../../link'

const getProduct = async (setProducts,search) => {
  const pros = await Axios.get(`${link}/api/product/search/${search}`)
  setProducts(pros.data)
}

const getProfile = async (setProfile) => {
  const pros = await Axios.get(`${link}/api/customar/me`)
  setProfile(pros.data)
}

const productFilter = (products,search,setProducts) => {
  const reg = new RegExp(`${search}`,'gi')
  const pros =  products.filter(i => {
    const tag = i.tags.join('');
    if(i.title.match(reg)) return true
    if(tag.match(reg)) return true
     return false
  })
  setProducts(pros)
}

const Hoc = (Children) => {
  return function Get(props){
    const [products,setProducts] = useState(null)
    const [profile,setProfile] = useState(null)

    useEffect(() => {
      getProduct(setProducts,props.match.params.search)
    },[props.match.params.search])

    useEffect(() => {
      getProfile(setProfile)
    },[])

    return (products && profile) && <Children products={products} favourite={profile.favourite}/>
  }
}

export default Hoc
