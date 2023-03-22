import React, { useState } from 'react'
import styled from 'styled-components'

const MasculineStyled = styled.div`
  .card{
    max-width: 210px;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: white;
    border-radius: 10px;
    padding:10px;
    box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);
    height: 350px;
    overflow: hidden;
    position: relative;
    transition: .3s;
    cursor: pointer;
  }
  .card::before{
    content: "";
    position: absolute;
    background: linear-gradient(transparent,${({ theme }) => theme.backgroundBase});
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
  }
  
  .card img{
    height: 170px;
    margin-top: 5px;
  }
  .card div{
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
  .card p{
    text-align: justify;
    font-family: 'Inria Serif', serif;
  }
  .card button{
    width: 100%;
    height: 40px;
    margin-top: 20px;
    border-radius: 10px;
    font-size: 1.5rem;
    border: none;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    background: #463333;
    color: white;
    cursor: pointer;
  }
  .container.active .card{
    height: auto;
    background-color: ${({theme})=>theme.sectionSelected};
    color: black;
  }
  .container.active .card img{
    box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);
  }
  .container.active .card::before{
    visibility: hidden;
  }
  .click{
    background-color: transparent;
    height: 80%;
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
  }
`

export default function MasculineCard(props) {
    const [card, setCard] = useState(false)
  return (
    <MasculineStyled>
      <div className={`container ${card && 'active' }`}>
        <div className='card'>
          <div >
            <img src={props.img} />
            <h2>{props.title}</h2>
          </div>
          <p>{props.description}</p>
          <button>More</button>
          <div onClick={()=>setCard(!card)} className='click'/>
        </div>
      </div>
    </MasculineStyled>
  )
}
