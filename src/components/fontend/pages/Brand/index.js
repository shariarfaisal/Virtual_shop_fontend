import React,{useState,useEffect} from 'react'
import Layout from '../../Layout'
import Axios from 'axios';
import link from '../../../link';

const getBrands = async (setBrands) =>{
  const brands = await Axios.get(`${link}/api/shop`);
  console.log(brands.data);
  setBrands(brands.data);
}

const Brand = (props) => {
  const [brands,setBrands] = useState(null);

  useEffect(() => {
    getBrands(setBrands)
  },[])
  return (
    <Layout>
      <div className="row">
        {
          brands && brands.map((i,key) => <BrandItem {...i} key={key} />)
        }
      </div>
    </Layout>
  )
}

const BrandItem = ({name,_id,image}) => (
  <div className="col-6 col-sm-3 col-md-2">
    <div className="card p-0 m-0 border-0">
      <div className="card-header p-0 m-0">
        <img src={`${link}/${image}`} className="card-img-top" alt={name} />
      </div>
      <div className="card-body text-center">
        <h6><a href={`/brand/${_id}`} className="text-dark">{name}</a></h6>
        <button type="button" className="btn btn-sm btn-info">follow</button>
      </div>
    </div>
  </div>
)

export default Brand
