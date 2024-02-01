import styled, { css } from "styled-components";

export const ContentIcon = styled.div`
display: none;
  div {
    width: 35px ;
    height: 3px;
    background-color: var(--third-color);
    margin: 5px;
  }

  ${({close}) => close && css`
  div {
    transition: all.5s;
    position: relative;
    top: 7px;
    left: 15px;
  }
.line-one {
  transform: rotate(-45deg) translate(-9px, -9px);
}
.line-two {
  opacity: 0;
}
.line-three {
  transform: rotate(45deg) translate(-20px, -2px);
}
`}
@media (max-width: 850px) {
  display: block;
}
`