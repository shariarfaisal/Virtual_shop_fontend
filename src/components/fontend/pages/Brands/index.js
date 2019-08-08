import React,{useState,useEffect,useContext} from 'react'
import Layout from '../../Layout'
import Axios from 'axios';
import link from '../../../link';
// import {ProfileContext} from '../../context/ProfileContext';

const getBrands = async (setBrands) =>{
  const brands = await Axios.get(`${link}/api/shop`);
  setBrands(brands.data);
}

const getProfile = async (setProfile) =>{
  const pro = await Axios.get(`${link}/api/customar/me`);
  setProfile(pro.data);
}

const Brands = (props) => {
  const [brands,setBrands] = useState(null);
  useEffect(() => {
    getBrands(setBrands)
  },[])

  return (
    <Layout>
      <div className="row">
        <div className="col-md-10 mx-auto">
          {
            brands && brands.map((i,key) => <BrandItem {...i} key={key} />)
          }
        </div>
      </div>
    </Layout>
  )
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

const BrandItem = ({name,_id,image,about}) => {
  const [isFollow,setIsFollow] = useState(false);
  const [profile,setProfile] = useState(null);
  const [is,setIs] = useState(true);
  useEffect(() => {
    getProfile(setProfile);
  },[])

  useEffect(()=>{
    if(profile && is){
      setIsFollow(profile.follow.find(i => i.shop._id === _id))
      setIs(false)
    }
  })



  return(
  <div className="list-group-item list-group-item-action border-0 rounded-0">
    <div className="media">
      {image && <img className="d-flex mr-3" src={`${link}/${image}`} style={{minWidth: '160px',maxWidth: '200px'}} alt={name} />}
        {!image && <div className="d-flex justify-content-center align-items-center bg-dark mr-3" style={{minWidth: '200px',minHeight: '116px'}}>
            <p className="text-muted text-center">No image</p>
          </div>}
      <div className="media-body">
          <h5><a className="text-dark" href={`/brand/${_id}`}>{name}</a></h5>
          {about && <p>{stringConverter(about,100)}</p>}
          <button style={{marginTop: about ? '' : '20px'}} onClick={e => followHandler(_id,setIsFollow,isFollow)} type="button" className="btn btn-sm btn-primary px-3">{isFollow ? 'unfollow' : 'follow'}</button>
      </div>
      </div>
  </div>
)}


  // <div className="card p-0 m-0 border-0">
  //   {image && <img src={`${link}/${image}`} className="card-img-top rounded-0" alt={name} />}
  //   {!image && <div className="d-flex justify-content-center align-items-center bg-dark" style={{minHeight: '150px'}}>
  //     <p className="text-muted text-center">No image</p>
  //   </div>}
  //   <div className="card-body text-center">
  //     <h6><a href={`/brand/${_id}`} className="text-dark">{name}</a></h6>
  //     <button onClick={ e => followHandler(_id,setIsFollow,isFollow)} type="button" className="btn btn-sm btn-info">
  //       {isFollow ? 'unfollow' : 'follow'}
  //     </button>
  //   </div>
  // </div>

export default Brands;
