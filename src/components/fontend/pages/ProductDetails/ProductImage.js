import React from 'react'

const ProductImage = ({display,shortDisplay,setDisplay}) => {
  return (
    <div className="col-sm-6">
      <img src={`img/${display}`} className="img-fluid" alt="img" />
      <div className="row d-flex flex-row justify-content-center my-3">
        {
          shortDisplay.map((i,key) => (
            <div onMouseUp={e => setDisplay(i)} key={key} className="mx-2">
              <img src={`img/${i}`} width="150px" alt="image" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductImage
