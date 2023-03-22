import Aos from 'aos'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import MasculineCard from './cards/Masculine'
import { DataProducts } from './config'

const MasculineStyled = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  height: 90vh;
  max-width: 90%;
  margin: auto;
  background-color:${({theme})=>theme.backgroundColor};
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

export default function Masculine() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <MasculineStyled data-aos="fade-left" data-aos-duration="1500">
      {DataProducts.masculine.map((value, i) => {
        return (
          <MasculineCard
            key={i}
            img={value.img}
            title={value.title}
            description={value.description}
          />
        )
      })}
    </MasculineStyled>
  )
}
