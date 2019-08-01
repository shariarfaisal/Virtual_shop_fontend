import React,{useState} from 'react'
import Axios from 'axios';
import link from '../../../link'


const Login = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isError,setIsError] = useState(false);

  const onChangeHandler = async e => {
    e.preventDefault();
    const login = await Axios.post(`${link}/api/shop/login`,{email,password});

    if(!login.data.error){
      setEmail('');setPassword('')
      localStorage.setItem('virtual_shopkeeper_token',login.data);
      const redirect = props.history.push('/shop')
    }else{
      setIsError(true);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto text-center my-5">
          {isError && <Alert type="danger">Email or Password doesn't match !</Alert>}
        </div>
        <div className="col-md-6 m-auto">
        <div className="card">
          <div className="card-header text-center">
            Login into shop account
          </div>
          <div className="card-body">
            <form onSubmit={onChangeHandler}>
              <FormGroup id="email" label="Email" type="email" set={setEmail} value={email} />
              <FormGroup id="password" label="Password" type="password" set={setPassword} value={password} />
              <button type="submit" className="btn btn-sm btn-primary">Submit</button>
              <p className="text-muted my-2" style={{fontSize: '15px',fontWeight: '500'}}>Have no account? <a href="/shop/register">register here</a></p>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

const Alert = ({children,type}) => (
  <div className={`text-center alert alert-${type} my-2`} role="alert">{children}</div>
)

const FormGroup = ({id,label,type,set,value}) => {
  return(
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input required type={type} id={id} onChange={e => set(e.target.value)} className="form-control" value={value} placeholder={label} />
    </div>
  )
}

export default Login
