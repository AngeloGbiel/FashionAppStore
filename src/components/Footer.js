import React from 'react'
import styled from 'styled-components'
import * as BsIcons from 'react-icons/bs'

const FooterStyled = styled.div`
    background-color: ${({ theme }) => theme.backgroundBase};
    position: relative;
    z-index: 99;
    .container{
        height: 50vh;
        color: white;
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin: auto;
        max-width: 90%;
    }
    .finish{
        max-width: 30%;
    }
    .communication{
        display: flex;
        gap: 70px;
    }
    .finish h3{
        font-family: 'Italiana', serif;
        font-size: 1.7rem;
    }
    .finish p{
        font-family: 'Inria Serif', serif;
        font-size: 1rem;
    }
    .communication .Contact h2{
        font-family: 'Inter', sans-serif;
    }
    .communication .Contact p{
        font-family: 'Inria Serif', serif;
    }
    .communication .UsefulLinks h2{
        font-family: 'Inter', sans-serif;
    }
    .communication .UsefulLinks p{
        font-family: 'Inria Serif', serif;
    }
    .sendInformation h2{
        font-family: 'Jacques Francois', serif;
    }
    .email{
        width: 350px;
        height: 50px;
        background: #595959;
        box-shadow: inset 0px -1px 0px rgba(165, 165, 165, 0.5), inset 0px 1px 2px rgba(0, 0, 0, 0.5);
        border-radius: 50px;
        outline: none;
        border: none;
        padding-left: 20px;
        color: white;
    }
    .sendInformation label{
        font-size: 50px;
        position: absolute;
        left: 100%;
        transform: translate(-100%);
        filter:drop-shadow(0px 2px 2px rgba(0, 0, 0, 1));
        transition: all .2s;
    }
    .sendInformation label:hover{
        filter: none;
        transition: all .2s;
        cursor: pointer;
    }
    .input{
        position: relative;
    }
    input::placeholder {
        color: white;
    }
    @media (max-width:950px){
        .communication{
            display: none;
        }
        .finish{
            max-width: 50%;
        }
    }
    @media (max-width:620px){
        .container{
            display:flex;
            flex-direction: column;
            gap: 10%;
            align-items: flex-start;
            justify-content: flex-start;
            padding-top: 30px;
        }
        .finish{
            max-width: 100%;
        }
    }
    @media (max-width:600px){
    max-width: 100%;
    z-index: 0;
  }
`

export default function Footer() {
    return (
        <FooterStyled>
            <div className='container'>
                <div className='finish'>
                    <h3>Feshion Store</h3>
                    <p>Amet minim mollit non deserunt ullamco est
                        sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat
                        sunt nostrud amet.</p>
                </div>
                <div className='communication'>
                    <div className='Contact'>
                        <h2>Contact</h2>
                        <p>Instagram</p>
                        <p>Whatsapp</p>
                        <p>Facebook</p>
                    </div>
                    <div className='UsefulLinks'>
                        <h2>Useful links</h2>
                        <p>Clothing</p>
                        <p>Fashion</p>
                        <p>Fabrics</p>
                        <p>Color</p>
                    </div>
                </div>
                <div className='sendInformation'>
                    <h2>For more information</h2>
                    <div className='input'>
                        <input id='email' className='email' placeholder='E-mail'></input>
                        <label htmlFor='email'>
                            <BsIcons.BsArrowLeftCircleFill onClick={()=>alert('E-mail salvo')}/>
                        </label>
                    </div>
                </div>
            </div>
        </FooterStyled>
    )
}
