import React,{useState,useEffect,useContext} from 'react'
import Layout from '../../Layout'
import BrandHoc from './BrandHoc'
import BrandItem from './BrandItem'


const Brands = ({brands,followHandler,stringConverter,follows}) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-10 mx-auto">
          {
            brands.map((i,key) => <BrandItem
                    {...i}
                    key={key}
                    followHandler={followHandler}
                    stringConverter={stringConverter}
                    follows={follows}
                  />)
          }
        </div>
      </div>
    </Layout>
  )
}

export default BrandHoc(Brands);
