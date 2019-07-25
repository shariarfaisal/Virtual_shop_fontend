import React,{useState} from 'react'
import Layout from '../../Layout'
import Details from './Details'
import ProductImage from './ProductImage';
import ProductRreview from './ProductRreview';
import AddReview from './AddReview';
import AlsoLike from './AlsoLike';

const ProductDetails = (props) => {
  const [shortDisplay,setShortDisplay] = useState(['img4.jpg','img5.jpg','img6.jpg'])
  const [display,setDisplay] = useState(shortDisplay[0]);
  return (
    <Layout>
      <div id="product-details" className="row">
        <div id="pic-with-details" className="col-12">
          <div className="card border-0">
            <div className="card-body row">
              <ProductImage setDisplay={setDisplay} display={display} shortDisplay={shortDisplay}/>
              <Details />
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
      </div>
    </Layout>
  )
}

export default ProductDetails
