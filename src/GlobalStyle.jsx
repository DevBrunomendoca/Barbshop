import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
}
:root {
  --primary-color: #5A6A8C; //#5A6A8C
  --second-color: #242524; //#DAA521
  --third-color: #FFFFFF; //#FFFFFF
}
html {
  font-size: 95%;
@media (max-width:750px) {
  font-size: 80.5%;
}
}

body {
  background-color: #1d1d1d;
}
.active { 
  position: relative;
  transition: all.5s;
}
.active::after { 
  content: " ";
  width: 100%;
  height: 3px;
  background-color: var(--third-color);
  position: absolute;
  bottom: 0px;
  left: 0;
  animation: EffectBorder .5s; 
  @keyframes EffectBorder {
    from{
      width: 0%;
      opacity: 0;
    }
    to{
      opacity: 1;
      width: 100%;
    }
}
}
.active:hover ::after {}
  width: 100%;


.active-service { 
  background-color: red;
}


.active-border {

  border-bottom:3px solid var(--third-color);
  
}
`
