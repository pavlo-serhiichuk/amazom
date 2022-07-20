import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Desktop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background-color: rgb(22, 25, 30);
  height: 80px;
  @media screen and (max-width: 680px) {
    padding: 0;

  }
    @media screen and (max-width: 576px) {
    display: none;
  }
`

export const UserLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 354px;
  justify-content: end;
  @media screen and (max-width: 680px) {
    justify-content: center;
  }
`


export const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 576px) {
    padding: 0 15px;
    box-sizing: border-box;
    background-color: rgb(22, 25, 30);
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    width: 100%;
  }
`


export const A = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  box-sizing: border-box;
  color: #fff;

  &:hover {
    background-color: rgba(70, 59, 124, 0.88);
  }
  @media screen and (max-width: 680px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 576px) {
    width: 85px;
  }
`
