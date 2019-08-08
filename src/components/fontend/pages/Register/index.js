import React,{useState} from 'react'
import Layout from './Layout';
import Axios from 'axios';
import link from '../../../link';

const getRegister = async (data) => {
  const res = await Axios.post(`${link}/api/customar/register`,data);
  console.log(res.data);
  return res;
}

const checkLogin = (history) => {
  const token = localStorage.getItem('virtual_customar_token');
  if(token){
    history.push('/')
  }
}

const Register = (props) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');
  const [phone,setPhone] = useState('');
  const [city,setCity] = useState('');
  const [country,setCountry] = useState('');
  const [region,setRegion] = useState('');
  const [postal_code,setPostal_code] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [isSubmited,setIsSubmited] = useState(false);
  checkLogin(props.history)
  const submitHandler = e => {
    e.preventDefault();
    const submit = getRegister({name,email,address,phone,city,country,region,postal_code,password,confirmPassword});
    if(submit) {
      setIsSubmited(true);
      setName('');setEmail('');setAddress('');setPhone('');setCity('');setRegion('');setPostal_code('');setPassword('');setConfirmPassword('');setCountry('');
      props.history.push('/login');
    }
  }

  return (
    <Layout>
    {isSubmited && <div className="alert alert-success">Your Account created successfully!</div>}
      <form onSubmit={submitHandler}>
        <Input id="name" title="Name" type="text" value={name} set={setName}/>
        <Input id="email" title="Email" type="email" value={email} set={setEmail}/>
        <Input id="address" title="Address" type="text" value={address} set={setAddress}/>
        <Input id="phone" title="Phone" type="text" value={phone} set={setPhone}/>
        <Input id="country" title="Country" type="text" value={country} set={setCountry}/>
        <Input id="city" title="City" type="text" value={city} set={setCity}/>
        <Input id="region" title="Region" type="text" value={region} set={setRegion}/>
        <Input id="postal_code" title="Postal code" type="text" value={postal_code} set={setPostal_code}/>
        <Input id="password" title="Password" type="password" value={password} set={setPassword}/>
        <Input id="confirmPassword" title="Confirm password" type="password" value={confirmPassword} set={setConfirmPassword}/>
        <button type="submit" className="btn btn-sm btn-block btn-primary">Submit</button>
        <p className="text-muted my-2">Already have an account? <a href="/login">login here</a></p>
      </form>
    </Layout>
  )
}

const Input = ({id,title,type,value,set}) => (
  <div className="form-group">
    <input required className="form-control" id={id} type={type} value={value} placeholder={title} onChange={e => set(e.target.value)} />
  </div>
)

export default Register
