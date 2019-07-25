import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AddCategory = () => (
  <div className="card bg-light border-0 rounded-0" style={{
    minHeight: '100px'
  }}>
    <div className="card-body">
      <div className="d-flex align-items-center">
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
        <h3 className="ml-4">Add Category</h3>
      </div>
    </div>
  </div>
)

export default AddCategory
