import React,{useState,useContext} from 'react'
import EditProduct from './EditProduct';
import link from '../../../link'
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components'
import Axios from 'axios'
import {ShopContext} from '../../context/ShopContext';

const Product = (props) => {
  const [isEdit,setIsEdit] = useState(false);
  return (
    isEdit ? <EditProduct catName={props.catName} isEdit={isEdit} setIsEdit={setIsEdit} {...props}/> : <ProductSection {...props} isEdit={isEdit} setIsEdit={setIsEdit}  />
  )
}

const getDelete = async (id,setIsUp) => {
  const del = await Axios.delete(`${link}/api/product/${id}`)
  setIsUp(true);
  return del;
}


const ProductSection = ({_id,title,image,description,time,shop,category,price,isEdit,setIsEdit}) => {
  const des = ReactHtmlParser(description)
  const context = useContext(ShopContext);
  return (
    <div className="col-md-6 col-lg-4 my-3">
    <div className="card p-0 border-0 rounded-0">
      <div className="card-header p-0">
        <img src={`${link}/${image}`} className="card-img-top" alt="" />
      </div>
      <StyleCardBody className="card-body">
        <h3 className="" data-target={`#product_collapse_${_id}`} data-toggle="collapse">{title}</h3>
        <div className="collapse" id={`product_collapse_${_id}`}>
          <p className="my-2"><strong>price:</strong> ${price}</p>
          <p>{des}</p>
        </div>
      </StyleCardBody>
      <div className="card-footer d-flex">
        <button onClick={e => setIsEdit(!isEdit)} type="button" className="btn btn-sm btn-info ml-auto px-4">edit</button>
        <button onClick={e => getDelete(_id,context.setIsUp)} type="button" className="btn btn-sm btn-danger mx-3 px-4">delete</button>
      </div>
    </div>
    </div>
  )
}

const StyleCardBody = styled.div`
  h3{cursor: pointer;}
  p{
    margin-bottom: 0;
  }
`

export default Product
