import React,{useContext} from 'react';
import styled from 'styled-components'
import {ThemeContext} from '../../context/ThemeContext';
const FeaturedStyle = styled.div`
  .card{
    height: 400px;
    position: relative;
    border-radius: 0;
    color: #ffffff;
    background-size: cover;
    overflow: hidden;
    img{
      width: 100%;
      height: 400px;
    }
    .feature-info{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      bottom: 0;
      background-color: rgba(0,0,0,.7);

      div{
        margin-top: 100px;
        margin-left: 30px;
        button{
          color: #f50057;
          font-weight: 600;
        }
      }
    }
  }
`
const Featured = (props) => {
  const theme = useContext(ThemeContext)
  return (
    <FeaturedStyle id="featured" className="container col-12">
      <div className="card border-0 my-4">
        <img src="img/img10.jpg" alt="image" />
        <div className="feature-info">
          <div className="">
            <h1 style={{...theme.h1,color: theme.color.light}}>Convarse</h1>
            <p >Explore system though enougn to handle al your workouts</p>
            <button type="button" className="btn btn-light">shop brand</button>
          </div>
        </div>
      </div>
    </FeaturedStyle>
  )
}

export default Featured
