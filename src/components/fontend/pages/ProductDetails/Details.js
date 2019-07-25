import React,{useState} from 'react'
import Size from './Size';
import Quantity from './Quantity'
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import Rating from './Rating';
import Color from './Color';

const Details = (props) => {
  const [rating] = useState(4)
  return (
    <div className="col-sm-6">
      <Breadcrumb />
      <Rating rating={rating} />
      <h2>There will be product title</h2>
      <strong>$34</strong>
      <Color />
      <Size />
      <Quantity />
      <Footer />
    </div>
  )
}

export default Details
