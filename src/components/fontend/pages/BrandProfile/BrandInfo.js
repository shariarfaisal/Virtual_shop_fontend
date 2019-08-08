import React,{Fragment,useState,useEffect} from 'react'
import link from '../../../link';
import Axios from 'axios';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const getProfile = async (setProfile) => {
  const profile = await Axios.get(`${link}/api/customar/me`);
  if(profile.data){
    setProfile(profile.data);
  }
}

const followHandler = async (id,setIsFollow,isFollow) => {
  const get = await Axios.post(`${link}/api/customar/follow`,{shop: id});
  if(get) {
    setIsFollow(!isFollow);
  }
}

const BrandInfo = ({image,name,email,_id,about}) => {
  const [isFollow,setIsFollow] = useState(null);
  const [profile,setProfile] = useState(null);
  const [isUp,setIsUp] = useState(true);
  useState(() => {
    getProfile(setProfile)
  },[])

  useEffect(() => {
    if(profile && isUp) {
      setIsFollow(profile.follow.find(i => i.shop._id === _id))
      setIsUp(false)
    }
  })
  return (
    <Fragment>
      <img src={`${link}/${image}`} className="card-img rounded-0" style={{maxHeight: '400px'}} alt="" />
      <div className="card-header border-0 text-muted d-flex">
        <div className="">
          <h4 className="m-0">{name}</h4>
          <p className="m-0">{email}</p>
        </div>
        <button onClick={e => followHandler(_id,setIsFollow,isFollow)} type="button" className="btn btn-primary ml-auto py-0 rounded-0 my-auto" style={{width: '100px',height: '30px',fontWeight: 'bold'}}>{isFollow? 'unfollow' : 'follow'}</button>
        <DropdownStyle className=" my-auto dropdown">
          <Button id="brand-more"  className="mx-2 text-muted dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" style={{width: '70px',height: '30px',fontSize: '12px'}}>more</Button>
          <div  className="dropdown-menu" aria-labelledby="brand-more">
            <a href="" className="dropdown-item">about</a>
          </div>
        </DropdownStyle>
      </div>
    </Fragment>
  )
}

const DropdownStyle = styled.div`
  .dropdown-toggle:focus,.active:focus{
    box-shadow: 0;
    outline: 0;
  }
  .dropdown-menu{
    left: -86px !important;
  }

`

// <button type="button" className="btn btn-sm btn-light px-3 mt-2">about</button>

export default BrandInfo
