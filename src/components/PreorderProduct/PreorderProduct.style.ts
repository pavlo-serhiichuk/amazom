import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

interface ButtonProps {
  bgc?: string
}

interface ImgProps {
  url: string
}

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 10px 20px 0 150px;
  background-color: #fff;
  padding: 20px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContentContainer = styled.div``

export const Content = styled.div`
  display: flex;
  justify-content: left;
  gap: 20px;
  padding-top: 20px;
`

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid #000;
  padding: 0 0 15px;
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

export const Info = styled.div``

export const BtnContainer = styled.div`
`

export const AddToCart = styled.button<ButtonProps>`
  height: 50px;
  width: 150px;
  text-align: center;
  margin-right: 10px;
  background-color: ${props => props.bgc || 'rgba(204, 240, 255, 0.73)'};
  cursor: pointer;
  opacity: 0.8;
  box-sizing: border-box;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 1;
    border: 2px solid #3d76b0;
  }
`


