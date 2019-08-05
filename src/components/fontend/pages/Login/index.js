import React,{useState} from 'react'
import Axios from 'axios';
import link from '../../../link';

const getLogin = async (data,history,setIsLogged) => {
  try {
    const log = await Axios.post(`${link}/api/customar/login`,data);
    localStorage.setItem('virtual_customar_token',log.data)
    history.push('/');
  } catch (e) {
    setIsLogged(false)
  }
}

const checkLogin = (history) => {
  const token = localStorage.getItem('virtual_customar_token');
  if(token){
    history.push('/')
  }
}

const Login = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isLogged,setIsLogged] = useState(null);
  checkLogin(props.history);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    getLogin({email,password},props.history,setIsLogged)
  }
  return (
    <Layout>
      <form onSubmit={onSubmitHandler}>
        {isLogged === false && <div className="alert alert-danger">Email or Password Doesn't match !</div>}
        <Input id="email" title="Email" type="email" value={email} set={setEmail}/>
        <Input id="password" title="Password" type="password" value={password} set={setPassword}/>
        <button type="submit" className="btn btn-sm btn-block btn-primary">login</button>
        <p className="text-muted my-2">Have no account? <a href="/register">register here</a></p>
      </form>
    </Layout>
  )
}

const Input = ({id,title,type,value,set}) => (
  <div className="form-group">
    <input required className="form-control" id={id} type={type} value={value} placeholder={title} onChange={e => set(e.target.value)} />
  </div>
)

const Layout = ({children}) => (
  <div className="container d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
    <div className="row w-100">
      <div className="col-md-8 col-lg-6 mx-auto">
        <div className="card border-0">
          <h4 className="text-center">Login</h4>
          <div className="card-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Login
