import React,{useState,createContext,useEffect} from 'react'
import link from '../../link';
import Axios from 'axios';


export const ProfileContext = createContext();

const getProfile = async (setProfile) => {
  try {
    const pro = await Axios.get(`${link}/api/customar/me`);
    setProfile(pro.data)
  } catch (e) {
    if(e.message.includes('400')){
      // window.location = '/login'
    }
    console.log(e);
  }
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
