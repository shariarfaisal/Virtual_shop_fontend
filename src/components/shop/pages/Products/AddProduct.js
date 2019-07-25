import React,{useState} from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateProduct from './CreateProduct';

const AddProduct = () => {
  const [isProductAdd,setIsProductAdd] = useState(false);
  return (
    !isProductAdd ? <div className="col-md-4">
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
    </div> : <CreateProduct isProductAdd={isProductAdd} setIsProductAdd={setIsProductAdd}/>
  )
}

export default AddProduct
