import React from 'react'

const AddCategory = ({search,setSearch}) => {
  return(
    <div  className=" col-10 card bg-light border-0 rounded-0">
      <div className="card-body">
        <div className="form-group">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Search Category" />
        </div>
      </div>
    </div>
  )
}


export default AddCategory
