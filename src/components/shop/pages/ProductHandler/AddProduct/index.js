import React,{useState,useContext,useEffect} from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateProduct from './CreateProduct';
import {ShopContext} from '../../../../context/ShopContext'

const AddProduct = (props) => {
  const context = useContext(ShopContext);
  const [isProductAdd,setIsProductAdd] = useState(false);

  return (
    !isProductAdd?<div className="col-12 p-0" style={{borderBottom: '1px solid rgb(235, 235, 235)'}}>
      <div  className="card bg-light border-0 rounded-0" style={{
        minHeight: '100px'
      }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <Fab onClick={e => setIsProductAdd(!isProductAdd)} color="primary" aria-label="Add">
              <AddIcon />
            </Fab>
            <h3 className="ml-4">Add Product</h3>
          </div>
        </div>
      </div>
    </div>: <CreateProduct context={context} isProductAdd={isProductAdd} setIsProductAdd={setIsProductAdd} />
  )
}

export default AddProduct
