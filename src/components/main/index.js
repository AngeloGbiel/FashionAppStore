import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import ButtonStyled from './ButtonStyled'
import woman from './img/mulher.png'
import shape from './img/shape.png'
import { MainStyled } from './MainStyled'

export default function Main() {
  const [modal, setModal] = useState(false)
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <MainStyled>
      <div className='description'>
        <img data-aos="flip-left" data-aos-duration="3000" className='shape' src={shape} />
        <div data-aos="fade-down-right" data-aos-duration="1500" className='content'>
          <div className='title'>
            <h2>Feel Good</h2>
            <h2>Dressing Good</h2>
          </div>
          <p>The true art of fashion</p>
          <ButtonStyled setModal={setModal} />
        </div>
      </div>
      <div className='imgWoman'>
        <img data-aos="fade-left" data-aos-duration="1500" src={woman} />
      </div>
      <div className='circles'>
        <div className='circle1' />
        <div className='circle2' />
        <div className='circle3' />
      </div>
    </MainStyled>
  )
}
