import React,{useState} from 'react'
import Axios from 'axios';
import link from '../../../link';

const getUpdate = async (data,setIsUpdated) => {
  const update = await Axios.put(`${link}/api/customar`,data);
  if(update.data){
    setIsUpdated(true)
  }
}

const InfoUpdator = ({info,setEditOn}) => {
  const [name,setName] = useState(info.name);
  const [email,setEmail] = useState(info.email);
  const [address,setAddress] = useState(info.address);
  const [phone,setPhone] = useState(info.phone);
  const [country,setCountry] = useState(info.country);
  const [city,setCity] = useState(info.city);
  const [region,setRegion] = useState(info.region);
  const [postal_code,setPostal_code] = useState(info.postal_code);
  const [password,setPassword] = useState('');
  const [isUpdated,setIsUpdated] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const is = getUpdate({name,email,address,phone,country,city,region,postal_code,password},setIsUpdated);
    if(isUpdated) {setPassword('') }
  }
  return (
    <div className="card border-0 rounded-0">
      <div className="card-header d-flex border-0">
        <h5>Update your personal information</h5>
        <button onClick={e => setEditOn(false)} type="button" className="btn ml-auto btn-sm btn-danger mx-1 px-3">close</button>
      </div>
      <div className="card-body row">
        <form onSubmit={onSubmitHandler} className="col-md-8">
          <Input type="text" value={name} set={setName} placeholder="Name" />
          <Input type="email" value={email} set={setEmail} placeholder="Email" />
          <Input type="text" value={address} set={setAddress} placeholder="Address" />
          <Input type="text" value={phone} set={setPhone} placeholder="Phone" />
          <Input type="text" value={country} set={setCountry} placeholder="Country" />
          <Input type="text" value={city} set={setCity} placeholder="City" />
          <Input type="text" value={region} set={setRegion} placeholder="Region" />
          <Input type="text" value={postal_code} set={setPostal_code} placeholder="Postal Code" />
          <Input type="text" value={password} set={setPassword} placeholder="Password" />
          <button type="submit" className="btn btn-sm btn-primary mx-1 px-3">{isUpdated ? 'updated' : 'save'}</button>
        </form>
      </div>
    </div>
  )
}

// const Alert = ({isUpdated}) => (
//   !isUpdated && <div className="alert alert-success alert-dismissable mx-auto my-3">
//     <button type="button" className="close" data-dismiss="alert"><span>&times;</span></button>
//     Informatio Updated
//   </div>
// )

const Input = ({type,value,set,placeholder}) => (
  <div className="form-group">
    <input required className="form-control" type={type} value={value} onChange={e => set(e.target.value)} placeholder={placeholder} />
  </div>
)

export default InfoUpdator
