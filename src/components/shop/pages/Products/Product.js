import React,{useState} from 'react'
import EditProduct from './EditProduct';

const Product = (props) => {
  const [isEdit,setIsEdit] = useState(false);
  return (
    isEdit ? <EditProduct isEdit={isEdit} setIsEdit={setIsEdit}/> : <ProductSection {...props} isEdit={isEdit} setIsEdit={setIsEdit}  />
  )
}

const ProductSection = ({id,title,image,description,time,shopId,categoryId,price,discountedPrice,isEdit,setIsEdit}) => (
  <div className="col-md-4 my-3">
  <div className="card p-0 border-0 rounded-0">
    <div className="card-header p-0">
      <img src={image} className="card-img-top" alt="" />
    </div>
    <div className="card-body">
      <h3 className="" data-target={`#product_collapse_${id}`} data-toggle="collapse">{title}</h3>
      <div className="collapse" id={`product_collapse_${id}`}>
        <p>price: ${price}</p>
        <p>{description}</p>
      </div>
    </div>
    <div className="card-footer d-flex">
      <button onClick={e => setIsEdit(!isEdit)} type="button" className="btn btn-sm btn-info ml-auto px-4">edit</button>
      <button type="button" className="btn btn-sm btn-danger mx-3 px-4">delete</button>
    </div>
  </div>
  </div>
)

export default Product
