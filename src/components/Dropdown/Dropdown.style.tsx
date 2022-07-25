import styled from 'styled-components'

export const Wrapper = styled.ul`
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  position: absolute;
  top: 45px;
  max-height: 200px;
  overflow: scroll;
  background-color: #fff;
  border: 1px solid lightgrey;
  width: 560px;
  z-index: 2000;
  @media screen and (max-width: 1400px) {width: 385px;}
  @media screen and (max-width: 1200px) {width: 200px;}
`
