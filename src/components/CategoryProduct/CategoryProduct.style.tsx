import styled from 'styled-components'
import {BiHeart as LikedIcon} from 'react-icons/bi';
import {NavLink} from 'react-router-dom'

interface ImgProps {
  url: string
}

interface BtnProps {
  isCartProduct?: boolean
}

export const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.14);
  height: 250px;
  max-width: 500px;
  display: flex;
  justify-content: left;
  padding: 10px;
  gap: 15px;
  box-shadow: 0 0 5px rgba(153, 153, 153, 0.38);
  transition: all ease-in-out 200ms;
  &:hover {
    box-shadow: 0 0 8px rgba(153, 153, 153, 0.88);
  }
`

export const Details = styled.div`
  min-width: 190px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 112px;
  align-content: space-between;
`

export const Purchase = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
  padding-top: 5px;
  gap: 3px;
`

export const Button = styled.button<BtnProps>`
  background-color: ${({isCartProduct}) => isCartProduct ? '#af09ff': '#d57bff'};
  padding: 10px;
  color: beige;
  min-width: 130px;
  height: 23px;
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out .3s;
`
export const AddToWishes = styled(LikedIcon)`
  padding: 10px 20px;
  cursor: pointer;
`

export const Title = styled(NavLink)`
  font-weight: bold;
  font-size: 20px;
  height: 90px;
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

  &:hover {
    cursor: pointer;
  }
`

