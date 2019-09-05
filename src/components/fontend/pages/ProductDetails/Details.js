import React,{useState} from 'react'
import Size from './Size';
import Quantity from './Quantity'
import Footer from './Footer';
import ShopInfo from './ShopInfo';
import Rating from './Rating';
import Color from './Color';
import ReactHtmlParser from 'react-html-parser';

const Details = ({_id,title,price,description,shop}) => {
  const [rating] = useState(4)
  const des = ReactHtmlParser(description)
  return (
    <div className="col-sm-6">
      <ShopInfo {...shop}/>
      <Rating rating={rating} />
      <h2>{title}</h2>
      <div><strong>Price: </strong>${price}</div>
      <div className="p-3 my-3" style={{minHeight: '100px'}}>
        {des}
      </div>
      <Footer id={_id}/>
    </div>
  )
}

// <Color />
// <Size />
// <Quantity />
// <Footer />

export default Details
