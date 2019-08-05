import React from 'react'
import link from '../../../link';
const ProductImage = ({image}) => {
  return (
    <div className="col-sm-6">
      <img src={`${link}/${image}`} className="img-fluid" alt="img" />
    </div>
  )
}

// const ShortDisplay = () => (
//   <div className="row d-flex flex-row justify-content-center my-3">
//     {
//       shortDisplay.map((i,key) => (
//         <div onMouseUp={e => setDisplay(i)} key={key} className="mx-2">
//           <img src={`img/${i}`} width="150px" alt="image" />
//         </div>
//       ))
//     }
//   </div>
// )

export default ProductImage
