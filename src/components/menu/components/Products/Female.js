import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DataProducts } from './config'
import FemaleCard from './cards/Female'
import Aos from 'aos'

const FemaleStyled = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  height: 90vh;
  max-width: 90%;
  margin: auto;
  background-color: ${({theme})=>theme.backgroundColor};
  position: relative;
  @media (max-width:600px){
    max-width: 100%;
    z-index: 0;
  }
  @media(max-width:900px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    gap: 30px;
    margin-bottom: 30px;
  }
`

export default function Female() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <FemaleStyled  data-aos="fade-right" data-aos-duration="1500">
      {DataProducts.female.map((value) => {
        return (
          <FemaleCard
            img = {value.img}
            title = {value.title}
            description = {value.description}
          />
        )
      })}
    </FemaleStyled>
  )
}
// {DataProducts.female.map((value) => {
//   return (
//     <>
//       <img src={value.img} />
//       <h2>{value.title}</h2>
//       <p>{value.description}</p>
//     </>
//   )
// })}
