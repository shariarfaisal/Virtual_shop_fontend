import React from 'react'
import styled from 'styled-components';

const Subscribe = (props) => {
  return (
    <SubsStyled className="col-12 d-flex bg-light py-3">
      <p className="w-50 text-center my-auto text-uppercase text-secondary">Subscribe for shop news , updates and special offers</p>
      <div className="form-inline w-50">
        <input placeholder="Your e-mail here..." type="text" value="" className="form-control form-control-sm mr-2" />
        <button type="button" className="btn btn-sm btn-primary">Subscribe</button>
      </div>
    </SubsStyled>
  )
}

const SubsStyled = styled.div`
  p{font-weight: 600;}
  .form-inline{
    input{
      width: 60%;
    }
    button{
      width: 20%;
    }
  }
`

export default Subscribe
