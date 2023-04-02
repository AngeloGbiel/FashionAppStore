import styled from "styled-components";

export const MainStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    margin: auto;
    max-width: 80%;
    .description{
        display: flex;
        align-items: center;
        width: 100%;
    }
    .imgWoman img{
        width: 400px;
        position: relative;
        bottom:-15px;
        z-index: -1;
    }
    
    .shape{
        position: absolute;
        width: 300px;
    }
    .content{
        display: flex;
        flex-direction: column;
    }
    .content h2{
        font-size: 3rem;
        color: #ECC6A2;
    }
    .content p{
        font-size: 1.5rem;
        color: #ECC6A2;
    }
    .circle1{
        box-sizing: border-box;
        position: absolute;
        width: 450px;
        height: 450px;
        left: -20%;
        top: 70%;
        border-radius: 50%;
        border: 50px solid rgba(123, 83, 62, 0.75);
        z-index: -10;
        filter: blur(30px);
    }
    .circle2{
        box-sizing: border-box;
        position: absolute;
        width: 450px;
        height: 450px;
        left: 50%;
        top: 60%;
        border-radius: 50%;
        border: 50px solid rgba(123, 83, 62, 0.75);
        z-index: -10;
        filter: blur(30px);
    }
    .circle3{
        box-sizing: border-box;
        position: absolute;
        width: 275px;
        height: 275px;
        left: 90%;
        top: 10%;
        border-radius: 50%;
        border: 50px solid rgba(123, 83, 62, 0.75);
        z-index: -10;
        filter: blur(30px);
    }
    .modal{
        background-color: red;
        height: 50%;
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    @media(max-width:900px){
        position: relative;
        height: 100vh;
        z-index: 0;
        .imgWoman img{
            display: none;
        }
        .description{
            justify-content: center;
        }
        .content{
            align-items: center;
            gap: 10px;
        }
        .content .title{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .circles{
            display: none;
        }
        .content h2{
            font-size: 2.5rem;
            color: #ECC6A2;
        }
        .content p{
            font-size: 1.3rem;
            color: #ECC6A2;
        }
    }
`
