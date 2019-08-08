import React,{useState} from 'react'
import InfoUpdator from './InfoUpdator'

const Info = ({info}) => {
  const {name,email,address,country,city,region,postal_code,phone} = info;
  const [editOn,setEditOn] = useState(false);
  return (
    <div className="col-12 col-md-10 mx-auto">
      {!editOn ? <div className="card border-0  rounded-0">
        <div className="card-header border-0 d-flex">
          <h4>{name}</h4>
          <button onClick={e => setEditOn(!editOn)} type="button" className="btn btn-light btn-sm ml-auto p-0 text-muted" style={{width: '50px',height: '30px',fontWeight: 'bold',letterSpacing: '1px'}}>edit</button>
        </div>
        <div className="card-body text-muted">
          <p><strong>Email: </strong>{email}</p>
          <p><strong>Address: </strong>{address}</p>
          <p><strong>Phone: </strong>{phone}</p>
          <p><strong>Country: </strong>{country}</p>
          <p><strong>City: </strong>{city}</p>
          <p><strong>Region: </strong>{region}</p>
          <p><strong>Postal Code: </strong>{postal_code}</p>
        </div>
      </div> : <InfoUpdator info={info} setEditOn={setEditOn}/>}
    </div>
  )
}

export default Info
