import React,{useState} from 'react'


const Login = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const onChangeHandler = e => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto text-center my-5">
          <h3 className="text-muted">Login into shop account</h3>
        </div>
        <div className="col-md-6 m-auto">
        <div className="card">
          <div className="card-body">
            <form onSubmit={onChangeHandler}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={e => setEmail(e.target.value)} className="form-control" value={email} placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={e => setPassword(e.target.value)} className="form-control" value={password} placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-sm btn-primary">Submit</button>
              <p className="text-muted my-2" style={{fontSize: '15px',fontWeight: '500'}}>have no account? <a href="/shop/register">register here</a></p>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
