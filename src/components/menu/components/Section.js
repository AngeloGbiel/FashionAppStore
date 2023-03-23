import Aos from 'aos'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import camisa from '../img/camisa.png'

const SectionStyled = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    z-index: 99;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: white;
    font-family: 'Jomolhari', serif;
    .img img{
        height: 500px;
        position: absolute;
        top: 30px;
    }
    .container{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        max-width: 90%;
    }
    .content{
        max-width: 500px;
        text-align: end;
    }
    .content h2{
        font-size: 2.3rem;
        line-height: 2.5rem;
        margin-bottom: 10px;
    }
    .content p{
        max-width: 390px;
        float: right;
        font-size: 1.1rem;
        font-family: 'Jacques Francois', serif;
    }
    @media(max-width:800px){
        position: relative;
        height: 60vh;
        z-index: 0;
        .img img{
            display: none;
        }
        .content h2{
            font-size: 1.5rem;
            line-height: 2.5rem;
            margin-bottom: 10px;
        }
        .container{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 100%;
        }
        .content{
            text-align: center;
            justify-content: center;
        }
    }
`


export default function Section() {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <SectionStyled>
            <div data-aos="fade-right" data-aos-duration="2000" className='img'>
                <img src={camisa} />
            </div>
            <div className='container'>
                <div data-aos="zoom-in-left" data-aos-duration="2000" className='content'>
                    <h2>Stay on top of the main local and global trends</h2>
                    {/* <h2></h2> */}
                    <p>Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat
                        sunt nostrud amet.</p>
                </div>
            </div>
        </SectionStyled>
    )
}

