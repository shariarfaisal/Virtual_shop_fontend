import React,{useState,useEffect} from 'react'
import link from '../../../link'

const BrandItem = ({image,name,_id,follows}) => {
  const [isFollow,setIsFollow] = useState(null)

  useState(() => {
    const match = follows.find(i => i.shop._id === _id)
    if(match) setIsFollow(true)
    else setIsFollow(false)

  })

  return (
    <div className="col-4 col-md-2 mx-2 card p-0 rounded-0 border-0">
      <img src={`${link}/${image}`} alt={name} className="card-img-top"/>
      {isFollow !== null && <div className="card-body text-center">
        <h5><a className="text-dark" href={`/brand/${_id}`}>{name}</a></h5>
        <button type="button" className="btn btn-sm btn-primary">{isFollow ? 'unfollow' : 'follow'}</button>
      </div>}
    </div>
  )
}

export default BrandItem
