import styled from 'styled-components'
import {BiHeart as LikedIcon} from "react-icons/bi";

interface ImgProps {
  url: string
}

export const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.14);
  height: 250px;
  max-width: 370px;
  display: flex;
  justify-content: left;
  padding: 10px;
  gap: 15px;
  &:hover {
    box-shadow: 0 0 5px rgba(153, 153, 153, 0.38);
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 112px;
  align-content: space-between;
`

export const Purchase = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
  padding-top: 5px;
`

export const Button = styled.button`
  background-color: #af09ff;
  padding: 10px;
  color: beige;
  width: 120px;
  text-align: center;
  cursor: pointer;
`

export const AddToWishes = styled(LikedIcon)`
  padding: 10px 20px;
  cursor: pointer;
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
  height: 90px;
  overflow: hidden;
`

export const Img = styled.div<ImgProps>`
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
    box-shadow: 0 0 5px #74a82b;
  }
`

