import React,{useState} from 'react'
import Size from './Size';
import Quantity from './Quantity'
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import Rating from './Rating';
import Color from './Color';
import ReactHtmlParser from 'react-html-parser';
const Details = ({title,price,description}) => {
  const [rating] = useState(4)
  const des = ReactHtmlParser(description)
  return (
    <div className="col-sm-6">
      <Breadcrumb />
      <Rating rating={rating} />
      <h2>{title}</h2>
      <div><strong>Price: </strong>${price}</div>
      <div className="p-3 my-3" style={{minHeight: '300px'}}>
        {des}
      </div>
    </div>
  )
}

// <Color />
// <Size />
// <Quantity />
// <Footer />

export default Details
