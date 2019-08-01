import React from 'react';
import styled from 'styled-components';

const Header = (props) => {


  return (
    <HeaderStyle className="col-md-3 sticky-top" style={{height: '100vh'}}>
      <div className="row justify-content-center">
        <div className="col">
          <div className="py-3 h2" style={{color: '#0b86ae'}}>
            Brand Logo
          </div>
          <nav>
            <ul className="nav d-flex flex-column">
              <a href="#" className="nav-item py-2 my-2 d-flex">
                <div className="d-flex">
                  <span className="px-2"><i className="fas fa-home"></i></span>
                  <span className="px-2">Home</span>
                </div>
              </a>
              <a href="#" className="nav-item py-2 my-2">
                <div className="d-flex">
                  <span className="px-2"><i className="fas fa-user"></i></span>
                  <span className="px-2">Profile</span>
                </div>
              </a>
              <a href="#" className="nav-item py-2 my-2">
                <div className="d-flex">
                  <span className="px-2"><i className="fas fa-home"></i></span>
                  <span className="px-2">Category</span>
                </div>
              </a>
              <a href="#" className="nav-item py-2 my-2">
                <div className="d-flex">
                  <span className="px-2"><i className="fas fa-home"></i></span>
                  <span className="px-2">More</span>
                </div>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </HeaderStyle>

  )
}

const HeaderStyle = styled.div`
  ul{
    overflow-y: auto;
  }

  nav ul .nav-item{
    font-size: 20px;
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    border-radius: 100px;
    transition: .3s;
  }
  nav ul .nav-item:hover{
    background: #d2eaf1;
    color: #0b86ae;

  }
`

export default Header
