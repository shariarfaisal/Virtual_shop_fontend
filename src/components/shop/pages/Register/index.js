import React,{useState,useEffect,createRef} from 'react'
import Axios from 'axios';
import link from '../../../link'
const Register = (props) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [isOk,setIsOk] = useState(false);
  const [country,setCountry] = useState('')
  const onChangeHandler = async (e) => {
    e.preventDefault();
    const shop = await Axios.post(`${link}/api/shop/register`,{name,email,phone,password,confirmPassword,country});
    if(shop.data === true ){
      setIsOk(true);
      setName('');setEmail('');setPhone('');setPassword('');setConfirmPassword('');setCountry('')
    }

  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto text-center my-5">
          <h3 className="text-muted">Register to create shop account</h3>
          {isOk && <div className=" text-center alert alert-success my-2" role="alert">Your account created successfully</div>}
        </div>
        <div className="col-md-6 m-auto">
        <div className="card">
          <div className="card-body">
            <form  onSubmit={onChangeHandler}>
              <FormGroup id="name" label="Name" type="text" set={setName} value={name} />
              <FormGroup id="email" label="Email" type="email" set={setEmail} value={email} />
              <FormGroup id="country" label="Country" type="country" set={setCountry} value={country} />
              <FormGroup id="phone" label="Phone" type="text" set={setPhone} value={phone} />
              <FormGroup id="password" label="Password" type="password" set={setPassword} value={password} />
              <FormGroup id="confirmPassword" label="Confirm Password" type="password" set={setConfirmPassword} value={confirmPassword} />
              <button type="submit" className="btn btn-sm btn-primary">Submit</button>
              <p className="text-muted my-2" style={{fontSize: '15px',fontWeight: '500'}}>Already have an account? <a href="/shop/login">login here</a></p>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

const FormGroup = ({id,label,type,set,value}) => {
  return(
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input required type={type} id={id} onChange={e => set(e.target.value)} className="form-control" value={value} placeholder={label} />
    </div>
  )
}

export default Register
