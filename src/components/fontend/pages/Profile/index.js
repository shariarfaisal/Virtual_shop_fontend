import React,{useState,useEffect,useContext} from 'react';
import Layout from '../../Layout';
import FavFollow from './FavFollow';
import Info from './Info';
import Axios from 'axios';
import link from '../../../link';
import {ProfileContext} from '../../context/ProfileContext';

const Profile = (props) => {
  const [follow,setFollow] = useState(null);
  const [info,setInfo] = useState({})
  const context = useContext(ProfileContext);

  useEffect(()=> {
    if(context.profile){
      setInfo(context.profile);
      setFollow(context.profile.follow);
    }
  })

  return (
    <Layout>
      <div className="row">
        <Info info={info}/>
        {follow && <FavFollow follow={follow}/>}
      </div>
    </Layout>
  )
}

export default Profile
