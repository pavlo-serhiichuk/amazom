import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background-color: rgb(22, 25, 30);
  height: 80px;
  @media screen and (max-width: 576px) {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    width: 90%;
  }
`

export const UserLinks = styled.div`
  display: flex;
  flex-direction: row;
`

export const A = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  color: #fff;
  &:hover {
    background-color: rgba(70, 59, 124, 0.88);
  }
`
