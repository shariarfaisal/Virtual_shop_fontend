import React,{useState,useEffect,useContext} from 'react'
import Axios from 'axios';
import link from '../../link';
import {CoreContext} from '../../context/CoreContext'
import styled from 'styled-components'
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

const RightSidebar = (props) => {
  const [categories,setCategories] = useState([]);
  const context = useContext(CoreContext)
  const [search,setSearch] = useState('');
  useEffect(()=> {
    if(context){
      setCategories(context.categories);
    }
  })


  return (
    <div className="col-md-4" style={{maxHeight: '800px'}}>
      <div className="row">
        <div className="col-12 mb-5" >
          <div className="card border-0" style={{background: 'transparent'}}>
            <div className="card-body">
              <div className="search">
                <div className="form-group">
                  <input
                    value={search}
                    type="text"
                    onChange={e => setSearch(e.target.value)}
                    className="form-control"
                    style={{borderRadius: '100px'}}
                    placeholder="Search Category"
                  />
                </div>
              </div>
              <CategoriesStyle className="categories list-group bg-light">
                {searchFilter(categories,search).map((i,key) => {
                  return <CategoryItem key={key} {...i} />
                })}
              </CategoriesStyle>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CategoryItem  = ({name}) => (
  <div className="list-group-item list-group-item-action border-0 py-2 pl-4" style={{background: 'transparent'}}>
    <a  href={`/${name}`} style={{
      textDecoration: 'none',
      color: 'black',
      fontSize: '17px',
      fontWeight: 'bold'
    }}>{name}</a>
  </div>
)

const CategoriesStyle = styled.div`
  min-height: 200px;
  max-height: 300px;
  overflow-Y: scroll;

::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  background: #e3e3e3;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export default RightSidebar
