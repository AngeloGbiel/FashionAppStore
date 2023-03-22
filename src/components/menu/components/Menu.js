import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuStyled = styled.div`
  padding: 20px 40px 20px 40px;
  margin: auto;
  /* max-width: 90%; */
  position: relative;
  top: 50%;
  z-index: 99;
  background-color: ${({theme})=>theme.backgroundColor};
  div{
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  }
  .button::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -5%;
    height: 2px;
    width: 0%;
    background-color: white;
    transition: all .3s;
  }
  .button:hover::after,
  .button.active::after{
    width: 100%;
  }
  @media(max-width:600px){
    display: flex;
    justify-content: center;
    div{
      border: none;
    }
    position: relative;
        z-index: 0;
  }
`
const BottonLink = styled(Link)`
  font-size: 1.7rem;
`

export default function Menu() {
  useEffect(()=>{
    Aos.init()
  },[])
  const [focus, setFocus] = useState('button1')
  return (
    <MenuStyled>
      <div data-aos="fade-left">
        <BottonLink
          to='/'
          onClick={() => setFocus('button1')}
          className={`button ${focus=='button1' && 'active'}`}
        >Female</BottonLink>
        <BottonLink
          to='/m'
          onClick={() => setFocus('button2')}
          className={`button ${focus=='button2' && 'active'}`}
        >Masculine</BottonLink>
      </div>
    </MenuStyled>
  )
}
