import React,{useState} from 'react'
import Layout from '../../Layout'
import Hoc from './Hoc'
import Brands from './Brands'
import styled from 'styled-components'

const Search = (props) => {
  const [brand,setBrand] = useState(false)
  return (
    <Layout>
      <div className="container">
        <NavStyle className="bg-light">
          <ul className="nav text-muted">
            <li onClick={e => setBrand(false)} style={brand ? {} : {color: 'black',fontWeight: '600'}} className="nav-item p-3  mx-2">Product</li>
            <li onClick={e => setBrand(true)} style={brand ? {color: 'black',fontWeight: '600'} : {}} className="nav-item p-3  mx-2">Brand</li>
          </ul>
        </NavStyle>
        {!brand && <Brands products={props.products} favourite={props.favourite}/>}
      </div>
    </Layout>
  )
}

const NavStyle = styled.div`
  ul li{
    cursor: pointer;
    transition: .3s;
  }
`

export default Hoc(Search)
