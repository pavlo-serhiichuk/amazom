import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

interface ImgProps {
  url: string
}

export const Wrapper = styled.div`
  border-left: 1px solid red;
  margin: 10px 0 40px 5px;
  padding: 0 15px;
`

export const Img = styled(NavLink)<ImgProps>`
  background-color: rgba(168, 168, 168, 0.1);
  margin: auto;
  width: 300px;
  height: 280px;
  padding: 10px;
  position: relative;
  background-image: url(${({url}) => url});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 200px;
  box-sizing: border-box;
  transition: all ease-in-out 500ms;
  cursor: pointer;

  &:hover {
    //box-shadow: 0 0 0 5px #74a82b; 
    width: 435px;
  }
`