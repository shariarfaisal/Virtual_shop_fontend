import React,{useEffect,useState} from 'react'
import link from '../../../link';
import Axios from 'axios';

const getProfile = async (setFollows) =>{
  const pro = await Axios.get(`${link}/api/customar/me`);
  setFollows(pro.data.follow);
}

const stringConverter = (str,limit=100) => {
  if(str.length > limit){
    return str.substr(0,limit)+'...'
  }else{
    return str;
  }
}

const followHandler = async (id,setIsFollow,isFollow) => {
  const get = await Axios.post(`${link}/api/customar/follow`,{shop: id});
  if(get) {
    setIsFollow(!isFollow);
  }
}

const ShopInfo = ({_id,name,image,about}) => {
  const [isFollow,setIsFollow] = useState(true);
  const [follows,setFollows] = useState(null)
  const [is,setIs] = useState(true);

  useEffect(()=>{
    getProfile(setFollows)
  },[])
  useEffect(() => {
    if(follows && is){
      setIsFollow(follows.find(i => i.shop._id === _id))
      setIs(false)
    }
  })



  return (
    <div className="card bg-light my-2 border-0 rounded-0">
      <div className="card-body">
        <div className="media">
          <img className="d-flex mr-3" src={`${link}/${image}`} style={{minWidth: '160px',maxWidth: '200px'}} alt={name} />
          <div className="media-body">
              <h5><a className="text-dark" href={`/brand/${_id}`}>{name}</a></h5>
              {about && <p>{stringConverter(about,100)}</p>}
              <button style={{marginTop: about ? '' : '20px'}} onClick={e => followHandler(_id,setIsFollow,isFollow)} type="button" className="btn btn-sm btn-primary px-3">{isFollow ? 'unfollow' : 'follow'}</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ShopInfo
