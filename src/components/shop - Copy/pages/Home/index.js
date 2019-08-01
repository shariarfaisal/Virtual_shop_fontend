import React,{useState,useEffect} from 'react'
import Layout from '../../Layout';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import AddCategory from './AddCategory';
import Category from './Category'
import Axios from 'axios';
import link from '../../../link';

const getCategories = async (setCategories,categories) => {
  const cats = await Axios.get(`${link}/api/category`);
  console.log(cats.data);
  if(cats) {
    setCategories([...cats.data])
  }
}

const Home = (props) => {
  const [categories,setCategories] = useState([]);
  // const [filteredCategory,setFilterdCategory] = useState([]);
  const [search,setSearch] = useState('');
  const [isUp,setIsUp] = useState(true)
  useEffect(()=> {
    if(isUp){
      getCategories(setCategories,categories);
      setIsUp(false)
    }
  })

  const searchFilter = (categories,search) => {
    return categories.filter(i => {
      const reg = new RegExp(`${search}`,'gi')
      if(i.name.match(reg)){
        return true
      }else{
        return false
      }
    })
  }

  return (
    <Layout>
      <div className="row p-3 justify-content-center" style={{height: '100%'}}>
        <AddCategory search={search} setSearch={setSearch}/>
          {
            searchFilter(categories,search).map((i,key) => <Category key={key} cat={i}/>)
          }
      </div>
    </Layout>
  )
}

export default Home
