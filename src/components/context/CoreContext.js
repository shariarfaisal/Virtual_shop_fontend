import React,{useState,useEffect,createContext} from 'react';
import Axios from 'axios';
import link from '../link'

export const CoreContext = createContext();

const getProduct = async (setProducts) => {
  const pro = await Axios.get(`${link}/api/product/shop`)
  setProducts(pro.data)
}

const getCategories = async (setCategories) => {
  const cats = await Axios.get(`${link}/api/category`)
  setCategories(cats.data)
}
const CoreContextProvider = ({children}) => {
  const [products,setProducts] = useState([])
  const [categories,setCategories] = useState([])
  const [isUp,setIsUp] = useState(true);

  useEffect(() => {
    if(isUp){
      getProduct(setProducts)
      getCategories(setCategories)
      setIsUp(false);
    }
  })

  return (
    <CoreContext.Provider value={{products,categories,setIsUp}}>
      {children}
    </CoreContext.Provider>
  )
}

export default CoreContextProvider;
