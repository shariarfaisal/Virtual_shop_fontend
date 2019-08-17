import React,{useState,useEffect} from 'react'
import link from '../../../link'
import BrandHoc from './BrandHoc'

const BrandItem = ({name,_id,image,about,followHandler,stringConverter,follows}) => {
  const [isFollow,setIsFollow] = useState(false);
  const [is,setIs] = useState(true);

  useEffect(()=>{
    if(is){
      setIsFollow(follows.find(i => i.shop._id === _id))
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

export default BrandItem
