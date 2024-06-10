import { createGlobalStyle } from "styled-components"

export  const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Overpass", sans-serif;
 }

 :root {
    font-size: 62.5%;
 }

 body{
    font-size: 1.6rem;
    background: ${props => props.theme.HomeBackground};
    height: 100sv;
    display: flex;
    align-items: center;
    justify-content: center;
 }
`