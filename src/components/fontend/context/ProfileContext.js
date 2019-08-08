import React,{useState,createContext,useEffect} from 'react'
import link from '../../link';
import Axios from 'axios';


export const ProfileContext = createContext();

const getProfile = async (setProfile) => {
  const pro = await Axios.get(`${link}/api/customar/me`);
  setProfile(pro.data)
}

const ProfileContextProvider = ({children}) => {
  const [profile,setProfile] = useState({});

  useEffect(() => {
    getProfile(setProfile)
  },[])

  return (
    <ProfileContext.Provider value={{profile}}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileContextProvider
