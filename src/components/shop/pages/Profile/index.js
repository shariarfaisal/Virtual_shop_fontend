import React,{useState,useEffect,Fragment} from 'react'
import Layout from '../../Layout';
// import {CoreContext} from '../../../context/CoreContext';
import styled from 'styled-components';
import Axios from 'axios'
import link from '../../../link';
import AddAbout from './AddAbout';
import ShowAbout from './ShowAbout';

const getProfile = async (setProfile) => {
  const pro = await Axios.get(`${link}/api/shop/me`);
  setProfile(pro.data);
}

const Profile = (props) => {
  const [profile,setProfile] = useState(null);
  const [isUp,setIsUp] = useState(true);
  useEffect(() => {
    if(isUp){
      getProfile(setProfile);
      setIsUp(false);
    }
  })

  return (
    <Layout>
      {profile && <div className="col-12 mb-5">
        <div className="card p-0 m-0 border-0">
          <div className="card-body p-0 m-0">
              <div>
                <img src={`${link}/${profile.image}`} className="card-img-top rounded-0 mt-3" alt={`${profile.name}`} />
                <div className="">

                </div>
              </div>
              <div className="my-3 text-muted">
                <ControlInfo setIsUp={setIsUp} profile={profile}/>
              </div>
              <ChangePassword />
              {!profile.about ? <AddAbout /> : <ShowAbout setIsUp={setIsUp} about={profile.about} />}
          </div>
        </div>
      </div>}
    </Layout>
  )
}


const ControlInfo = ({profile,setIsUp}) => {
  const [is,setIs] = useState(false);

  return (
    !is?
      <Fragment>
        <div className="d-flex align-items-center">
          <EditStyle onClick={e => setIs(true)} className="ml-auto">edit</EditStyle>
        </div>
        <h2>{profile.name}</h2>
        <p className="m-0">{profile.email}</p>
        <p className="m-0">{profile.phone}</p>
      </Fragment>:
    <FormControls setIsUp={setIsUp} profile={profile} setIs={setIs} />
  )
}


const getUpdate = async (data,setIsUp) => {
  const up = await Axios.put(`${link}/api/shop`,data);
  console.log(up.data);
  setIsUp(up.data);
}
const FormControls = ({profile,is,setIs,setIsUp}) => {
  const [name,setName] = useState(profile.name);
  const [email,setEmail] = useState(profile.email);
  const [phone,setPhone] = useState(profile.phone);
  const [password,setPassword] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    getUpdate({name,email,phone,password},setIsUp);
  }
  return (
  <form onSubmit={onSubmitHandler}>
    <div className="form-group">
      <input className="form-control" type='text'  value={name} onChange={e => setName(e.target.value)}  />
    </div>
    <div className="form-group">
      <input className="form-control" type='email'  value={email} onChange={e => setEmail(e.target.value)}  />
    </div>
    <div className="form-group">
      <input className="form-control" type='text'  value={phone} onChange={e => setPhone(e.target.value)}  />
    </div>
    <div className="form-group">
      <input className="form-control" placeholder="Password" type='password' value={password} onChange={e => setPassword(e.target.value)}  />
    </div>
    <div className="d-flex justify-content-end">
      <button type="submit" className="btn btn-sm btn-light mx-2 px-3">save</button>
      <button onClick={e => setIs(false)} type="button" className="btn btn-sm btn-danger mx-2 px-3">close</button>
    </div>
  </form>
)}

const getPassUpdate = async (data,setIs,setIsUp) => {
  const passUp = await Axios.put(`${link}/api/shop/password`,data);
  if(passUp){
    setIs(false);
    setIsUp(true);
  }
}

const ChangePassword = (props) => {
  const [is,setIs] = useState(false);
  const [oldPassword,setOldPassword] = useState('');
  const [newPassword,setNewPassword] = useState('');
  const [isUp,setIsUp] = useState(false);
  const onSubmitHandler = e => {
    e.preventDefault();
    getPassUpdate({oldPassword,newPassword},setIs,setIsUp);
  }


  return (
    <ChangePassStyle className="">
      {!is && <span onClick={e => setIs(true)} className={isUp? 'text-success': 'text-muted'}>{isUp ?'Changed password' : 'Change password'}</span>}
      {is && <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input className="form-control form-control-sm" onChange={e => setOldPassword(e.target.value)} type="password" name="" value={oldPassword} placeholder="Old Password" />
        </div>
        <div className="form-group">
          <input className="form-control form-control-sm" onChange={e => setNewPassword(e.target.value)} type="password" name="" value={newPassword} placeholder="New Password" />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-sm btn-light mx-2 px-3">save</button>
          <button onClick={e => setIs(false)} type="button" className="btn btn-sm btn-danger mx-2 px-3">close</button>
        </div>
      </form>}
    </ChangePassStyle>
  )
}

const ChangePassStyle = styled.div`
  span:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`


const EditStyle = styled.span`
  font-size: 14px;
  width: 50px;
  height: 20px;
  margin: 0 20px;
  padding: 0 10px;
  text-align: center;
  border-radius: 100px;
  font-weight: bold
  cursor: pointer;
  transition: .3s;
  &:hover{
    background: #e9e9e9;
    color: black;
  }
`



export default Profile
