import React,{useState} from 'react'
import EditProduct from './EditProduct';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components'
import Axios from 'axios'
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite'
import link from '../../../link';


const Product = (props) => {
  const [isEdit,setIsEdit] = useState(false);
  return (
    isEdit ?
      <EditProduct
        catName={props.catName}
        setIsUp={props.setIsUp}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        {...props}
      /> : <ProductSection
            {...props}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setIsUp={props.setIsUp}
          />
  )
}

const getDelete = async (id,setIsUp) => {
  const del = await Axios.delete(`${link}/api/product/${id}`)
  setIsUp(true);
  return del;
}

const stringLimit = (str) => str.substr(1,100);


const ProductSection = ({_id,title,category,image,description,time,shop,price,isEdit,setIsEdit,setIsUp}) => {
  const des = ReactHtmlParser(description)
  return (
    <StyleProduct className="col-12 py-4" style={{borderBottom: '1px solid rgb(235, 235, 235)'}}>
      <div className="card p-0 border-0 rounded-0">
        <div className="d-flex">
          <div className="">
            <h4 className="m-0">{title}</h4>
            <h6>{category.name}</h6>
            <p className="text-muted">{time}</p>
          </div>
          <div className="ml-auto p-0 m-0">
            <button type="button" className="btn dropdown-toggle p-0 m-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
            <div className="dropdown-menu dropdown-menu-right">
              <button onClick={e=> setIsEdit(true)} className="dropdown-item" type="button">
                <span style={{fontSize: '15px',color: 'black',fontWeight: '600'}}>edit</span>
              </button>
              <button onClick={e => getDelete(_id,setIsUp)} className="dropdown-item" type="button">
                <span style={{fontSize: '15px',color: 'black',fontWeight: '600'}}>delete</span>
              </button>
            </div>
          </div>

        </div>
        <div className="">
          <img src={`${link}/${image}`} alt={`${title}`} className="card-img-top rounded-0" />
        </div>
        <div className="d-flex py-3 justify-content-around">
          <div className="h5">
            <span className="text-muted">likes</span> 123
          </div>
          <div className="h5" style={{cursor: 'pointer'}}>
              <span className="text-muted">comments</span> 20
          </div>
        </div>
        <div>
          <p className="my-3 text-muted" data-target={`#product_collapse_${_id}`} data-toggle="collapse" style={{cursor: 'pointer',textDecoration: 'underline'}}>More about product</p>
          <div  className="collapse" id={`product_collapse_${_id}`} >
            {des}
          </div>
        </div>
      </div>
    </StyleProduct>
  )
}


const StyleProduct = styled.div`
  &:hover{
    background: #f8f9fa!important;
  }
  .card{
    background: transparent !important;
  }
`

export default Product
