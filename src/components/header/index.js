import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { dataHeader } from './config'
import { HeaderStyled } from './HeaderStyled'


const Burger = styled.div`
  display: none;
  @media (max-width:600px){
    display: flex;
    position: absolute;
    font-size: 2.5rem;
    top: 10px;
    left: 10px;
    cursor: pointer;
    color: white;
  }
`

export default function Header() {
  const [focus, setFocus] = useState('Home')
  const [active, setActive] = useState(false)
  return (
    <>
      <Burger onClick={()=>setActive(true)}>
        {dataHeader.responsiveBurger}
      </Burger>
      <HeaderStyled active={active}>
        <div className='logo'>
          <img src={dataHeader.logo} />
          <p>{dataHeader.NameStore}</p>
        </div>
        <div className='menu'>
          {dataHeader.menu.map((value, i) => {
            return (
              <div key={i} onClick={() => setFocus(value.title)} className={(focus == value.title) ? 'menuContainer activeMenu' : 'menuContainer'}>
                <div className='icons'>{value.icon}</div>
                <a
                  href={value.title}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                  className={(focus == value.title) ? 'active' : null}
                >{value.title}</a>
              </div>
            )
          })}
        </div>
        <div className='socialmedia'>
          <div className='iconsSocialMidia'>
            {dataHeader.socialmidia.map((value, i) => {
              return (
                <div key={i} className='containerSocialMidia'>
                  <div>{value.icon}</div>
                  <p className='titleSocialMidia'>{value.title}</p>
                </div>
              )
            })}
          </div>
          <p className='nameSocialMidia'>| Guinea</p>
        </div>
        <div className='close' onClick={()=>setActive(false)}>
          {dataHeader.responsiveClose}
        </div>
      </HeaderStyled>
    </>
  )
}
