import React,{useState,useEffect} from 'react'
import Layout from '../../Layout'
import Details from './Details'
import ProductImage from './ProductImage';
import ProductRreview from './ProductRreview';
import AddReview from './AddReview';
import AlsoLike from './AlsoLike';
import Axios from 'axios';
import link from '../../../link';

const getProduct = async (id,setProduct) => {
  const pro = await Axios.get(`${link}/api/product/${id}`);
  setProduct(pro.data);
}


const ProductDetails = ({match}) => {
  // const [shortDisplay,setShortDisplay] = useState(['img4.jpg','img5.jpg','img6.jpg'])
  const [product,setProduct] = useState(null);

  useEffect(() => {
    getProduct(match.params.id,setProduct);
  },[])
  return (
    <Layout>
      {product && <div id="product-details" className="row">
        <div id="pic-with-details" className="col-12">
          <div className="card border-0">
            <div className="card-body row">
              <ProductImage image={product.image}/>
              <Details title={product.title} price={product.price} description={product.description}/>
            </div>
          </div>
        </div>
        <div className="col-12 mt-2">
          <div className="card border-0">
            <div className="card-body">
              <ProductRreview />
              <hr />
              <AddReview />
            </div>
          </div>
        </div>
        <AlsoLike />
      </div>}
    </Layout>
  )
}

export default ProductDetails
