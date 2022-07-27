import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


interface ImgProps {
  url: string
}

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 10px 150px;
  background-color: #fff;
  padding: 20px;
`

export const Content = styled.div`
  display: flex;
  justify-content: left;
  gap: 20px
`

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export const Img = styled(NavLink)<ImgProps>`
  border: none;
  background-color: #fff;
  min-width: 150px;
  height: 250px;
  background-image: url(${({url}) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150px;
  box-sizing: border-box;
  background-color: rgba(96, 95, 95, 0.16);
`

export const Info = styled.div`
  
`