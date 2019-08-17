import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import link from '../../../link';

const getBrands = async (setBrands) =>{
  const brands = await Axios.get(`${link}/api/shop`);
  setBrands(brands.data);
}

const getProfile = async (setProfile) =>{
  const pro = await Axios.get(`${link}/api/customar/me`);
  setProfile(pro.data);
}

const followHandler = async (id,setIsFollow,isFollow) => {
  const get = await Axios.post(`${link}/api/customar/follow`,{shop: id});
  if(get) {
    setIsFollow(!isFollow);
  }
}

const stringConverter = (str,limit=100) => {
  if(str.length > limit){
    return str.substr(0,limit)+'...'
  }else{
    return str;
  }
}

const BrandHoc = (Children) => {
  return function Get(props){
    const [brands,setBrands] = useState(null);
    const [profile,setProfile] = useState(null);

    useEffect(() => {
      getProfile(setProfile);
    },[])

    useEffect(() => {
      getBrands(setBrands)
    },[])

    return (brands && profile) &&
            <Children
              brands={brands}
              followHandler={followHandler}
              stringConverter={stringConverter}
              follows={profile.follow}
            />
  }
}

export default BrandHoc
