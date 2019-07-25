import React,{useState} from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
const Quantity = (props) => {
  const [qty,setQty] = useState(1);
  return (
    <div>
      <h4 className="text-muted">Quantity</h4>
      <div className="ml-2 qt" >
        <ul className="nav">
          <li onClick={e => (qty-1) !== 0 ? setQty(qty-1) : false} style={{cursor: 'pointer'}} className="nav-item px-3 h3 text-danger">&minus;</li>
          <li className="nav-item px-3 h3">{qty}</li>
          <li onClick={e => setQty(qty+1)} style={{cursor: 'pointer'}} className="nav-item px-3 h3 text-danger">&#x2b;</li>
        </ul>
      </div>
    </div>
  )
}

export default Quantity
