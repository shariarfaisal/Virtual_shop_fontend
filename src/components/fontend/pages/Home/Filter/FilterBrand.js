import React from 'react'
import styled from 'styled-components';


const FilterBrand = ({brands}) => (
  <div className="my-2">
    <h5 className="text-muted">Brand</h5>
    <BrandStyled className="ml-2">
      <form>
        {brands.map((i ,key)=>(
          <div key={key} className="form-check">
            <label htmlFor={`brand_${i}`} className="form-check-label">
              <input id={`brand_${i}`} type="checkbox" className="form-check-input" value={i} /><span className="text-secondary">{i}</span>
            </label>
          </div>
        ))}
      </form>
    </BrandStyled>
  </div>
)

const BrandStyled = styled.div`
  width: 100%;
  background: #ffffff;
  max-height: 100px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #e3e3e3;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export default FilterBrand
