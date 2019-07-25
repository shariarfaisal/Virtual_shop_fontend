import React,{Fragment,useState} from 'react'
import styled from 'styled-components';
import Range from './Range'
import FilterColor from './FilterColor'
import FilterInfo from './FilterInfo'
import FilterSize from './FilterSize'
import FilterBrand from './FilterBrand'
import FilterFooter from './FilterFooter'
const FilterStyle = styled.div`
  box-sizing: border-box;
  .card{
    border-radius: 0;
  }
`;

const FilterContent = (props) => {
  const [filterColor,setFilterColor] = useState(['red','black','green','lightblue','gray','yellow'])
  const [brands,setBrands] = useState(['Addidas','Hiroko','Bonde','Rolax','Bonde','Rolax','Bonde','Rolax'])
  return (
    <FilterStyle id="filter" className="col-md-3 mx-auto mt-3">
      <div className="card">
        <FilterInfo />
        <div className="card-body">
          <FilterColor colors={filterColor}/>
          <FilterSize />
          <Range />
          <FilterBrand brands={brands}/>
          <FilterFooter />
        </div>
      </div>
    </FilterStyle>
  )
}

export default FilterContent
