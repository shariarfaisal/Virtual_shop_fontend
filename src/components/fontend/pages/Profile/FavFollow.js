import React,{useState} from 'react'
import link from '../../../link'
import Axios from 'axios';

const FollowItem = (props) => {
  const {image,name,_id} = props.shop
  const [isFollow,setIsFollow] = useState(true);

  const followHandler = async () => {
    const get = await Axios.post(`${link}/api/customar/follow`,{shop: _id});
    if(get) {
      setIsFollow(!isFollow);
    }
  }

  return (
    <div className="col-6 col-md-3 col-lg-2">
      <div className="card border-0 rounded-0">
        {image && <img src={`${link}/${image}`} className="card-img-top rounded-0" alt={name} />}
        {!image && <div className="d-flex justify-content-center align-items-center bg-dark" style={{minHeight: '116px'}}>
          <p className="text-muted text-center">No image</p>
        </div>}
        <div className="card-body text-center">
          <h5><a className="text-dark" href={`/brand/${_id}`}>{name}</a></h5>
          <button onClick={e => followHandler()} type="button" className={`btn btn-sm btn-${isFollow? 'primary' : 'secondary'}`}>{isFollow ? 'unfollow' : 'follow'}</button>
        </div>
      </div>
    </div>
  )
}

const Followings = (props) => {
  return (
    <div className="card-body row">
      {props.follow.map((i,key) => <FollowItem key={key} {...i} />)}
    </div>
  )
}

const FavFollow = (props) => {
  return (
    <div className="col-12 col-md-10 mx-auto my-2">
      <div className="card border-0  rounded-0">
        <div className="card-header border-0 ">
          <h4>Following <span className="text-muted" style={{fontWeight: '500',fontSize: '14px'}}>{props.follow.length} brands</span></h4>
        </div>
          <Followings follow={props.follow}/>
      </div>
    </div>
  )
}

export default FavFollow
