import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

interface ImgProps {
  url: string
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IntroInfo = styled.div`
  width: 50%;
`
export const Title = styled(NavLink)`
  background-color: #fff;
  font-size: 70px;
  font-weight: bold;
  transition: all ease-in-out 200ms;
  &:hover {
    opacity: 0.8;
  }
`

export const Img = styled(NavLink)<ImgProps>`
    background-color: #fff;
    width: 50%;
    height: 520px;
    background-image: url(${({url}) => url});
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    transition: all ease-in-out 200ms;
    &:hover {
      opacity: 0.9;
   }
`
