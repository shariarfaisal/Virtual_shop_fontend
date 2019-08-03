import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  width: 100%;
  min-height: 100px;
  a{
    width: auto;
    height: auto;
    color: white;
    border-radius: 2px;
    font-size: 14px;
    text-transform: capitalize;
    display: inline-block;
    font-weight: 500;
  }
  a:hover{
    color: lightblue;
  }
  .social-icons{
    div{
      padding: 10px 16px;
      border-radius: 100%;
      transition: .2s;
      cursor: pointer;
      a{
        font-size: 22px;
      }
    }
    div:hover{
      background: #0000002e;
      a{
        color: #f50057;
      }
    }
  }
`
const Item = ({children}) =>(
    <a className=" mx-3 px-3 py-1" href="/">{children}</a>
)
const categories = ['kids-shirt','shirt','t-shirt','shoes','twelve','Easy','NinetyOne','Rock-star','tour','Blackijm']
const Footer = (props) => {
  return (
    <FooterStyle className="footer" className="row bg-dark text-light">
      <div className="col-md-6 p-4">
        {categories.map((i,key) => <Item key={key}>{i}</Item>)}
      </div>
      <div className="col-md-6 p-4">
          <div className="social-icons d-flex flex-row justify-content-center">
            <div className="mx-2">
              <a href="/"><i className="fas fa-heart"></i></a>
            </div>
            <div className="mx-2">
              <a href="/"><i className="fas fa-heart"></i></a>
            </div>
            <div className="mx-2">
              <a href="/"><i className="fas fa-heart"></i></a>
            </div>
            <div className="mx-2">
              <a href="/"><i className="fas fa-heart"></i></a>
            </div>
        </div>
      </div>
      <p className="text-center col-12 p-0 text-muted pb-2"><small>&copy; 2019 Shopmate Ltd . <a href="/"  className="text-muted">contact</a> . <a className="text-muted" href="/">Privacy policy</a></small></p>
    </FooterStyle>
  )
}

export default Footer
