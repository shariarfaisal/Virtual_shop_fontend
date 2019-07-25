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
  const onChangeHandler = async (e) => {
    e.preventDefault();
    const shop = await Axios.post(`http://localhost:1000/api/shop/register`,{name,email,phone,password,confirmPassword});
    if(shop.data === true ){
      setIsOk(true);
    }
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto text-center my-5">
          <h3 className="text-muted">Register to create shop account</h3>
          <p className="text-center text-success my-2">{isOk && 'Your account created successfully'}</p>
        </div>
        <div className="col-md-6 m-auto">
        <div className="card">
          <div className="card-body">
            <form ref={formRef} onSubmit={onChangeHandler}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required type="text" id="name" onChange={e => setName(e.target.value)} className="form-control" value={name} placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required id="email" type="email" onChange={e => setEmail(e.target.value)} className="form-control" value={email} placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input required id="phone" type="text" onChange={e => setPhone(e.target.value)} className="form-control" value={phone} placeholder="Phone" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input required id="password" type="password" onChange={e => setPassword(e.target.value)} className="form-control" value={password} placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input required id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} className="form-control" value={confirmPassword} placeholder="Confirm Password" />
              </div>
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

export default Register
