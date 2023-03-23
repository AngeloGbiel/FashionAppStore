import { createGlobalStyle } from "styled-components";

export const CSSreset = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${({theme})=>theme.backgroundColor};
        overflow-x: hidden;
        width: auto;
    }
    a{
        text-decoration: none;
        color: white;
        font-family: 'Jacques Francois', serif;
        position: relative;
    }
`