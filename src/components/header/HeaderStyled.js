import styled from "styled-components";

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* padding: 10px 0px 10px 0px; */
    /* background-color: red; */
    color: white;
    transition: all .5s;
    .logo{
        display: flex;
        align-items: center;
    }
    .logo img{
        width: 70px;
    }
    .close{
        display:none;
    }
    .logo p{
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 25px;
        font-family: 'Italiana', serif;
    }
    .menu{
        display: flex;
        align-items: center;
        font-size: .9rem;
        gap: 15px;
    }
    .menuContainer{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .menuContainer .icons{
        display: none;
    }
    .socialmedia, .iconsSocialMidia{
        display: flex;
        gap: 4px;
    }
    .titleSocialMidia{
        display: none;
    }
    .menu a::after{
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        height: 1px;
        width: 0%;
        background-color: white;
        transition: all .3s;
    }
    .menu a:hover::after,
    .menu a.active::after{
        width: 100%;
    }
    @media (max-width:600px){
        background-color: ${({theme})=>theme.backgroundBase};
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: fixed;
        z-index: 99;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        left: ${({active})=>active?"0":"-80%"};
        /* padding-left:5% ; */
        .logo{
            /* background-color: blue; */
            width: 100%;
            display: flex;
            border-bottom: 1px solid white;
            padding: 10px 0px 10px 0px;
        }
        .menu{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-size: 1.3rem;
            /* background-color: green; */
            width: 100%;
            gap: 0;
            border-bottom: 1px solid white;
        }
        .menuContainer .icons{
            display: flex;
        }
        .menuContainer{
            gap: 20px;
            padding: 20px;
            width: 100%;
            transition: all .3s;
        }
        a.active::after{
            display: none;
        }
        .menu .activeMenu{
            background-color: ${({theme})=>theme.navBarHover};
        }
        .titleSocialMidia{
            display: flex;
        }
        .socialmedia{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .containerSocialMidia{
            display: flex;
            /* background-color: red; */
            gap: 20px;
            padding: 20px;
            font-size: 1.3rem;
        }
        .iconsSocialMidia{
            display: flex;
            flex-direction: column;
            width: 100%;
            border-bottom: 1px solid white;
            padding-bottom: 80%;
        }
        .nameSocialMidia{
            font-size: 1.3rem;
        }
        .close{
            display: flex;
            position: absolute;
            font-size: 2rem;
            color: #868686;
            top: 5.5%;
            left: 93%;
        }
        .menu a::after{
            visibility: hidden;
        }
    }
`