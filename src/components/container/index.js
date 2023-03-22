import Aos from 'aos'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Data } from './config'

const StyledContainer = styled.div`
    height: 110px;
    width: 100%;
    background-color: #1D1A18;
    .container{
      margin: auto;
      max-width: 80%;
      display: flex;
      justify-content: space-between;
      height: 100%;
      align-items: center;
      img{
        height: 50px;
      }
    }
    @media(max-width:900px){
        height: 90px;
        .container img{
          height: 20px;
        }
    }
`

export default function Container() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <StyledContainer>
      <div className='container'>
        {Data.map((value,i)=>{
          return <img data-aos="zoom-in" data-aos-duration={"500"*i} key={i} src={value}/>
        })}
      </div>
    </StyledContainer>
  )
}
