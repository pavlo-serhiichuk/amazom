import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Wrapper = styled.ul`
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  position: absolute;
  top: 45px;
  max-height: 200px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid lightgrey;
  width: 560px;
  z-index: 2000;
  @media screen and (max-width: 1400px) {max-width: 385px;}
  @media screen and (max-width: 1200px) {max-width: 200px;}
`

export const DroppedProduct = styled.li`
  max-width: 100%;
  border-bottom: 1px solid lightgray;
  min-height: 30px;
  display: flex;
  align-items: center;

`
export const Title = styled.span`
  cursor: pointer;
`
