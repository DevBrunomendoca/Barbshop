import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --primary-color: #5A6A8C;
  --second-color: #242524;
  --third-color: #FFFFFF;
}
html {
  font-size: 62,5%;
}
body {
  background-color: #1d1d1d;
}

`