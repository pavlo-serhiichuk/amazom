import styled from 'styled-components'
import {Wrapper} from '../CategoryProduct/CategoryProduct.style'

export const ShowWrapper = styled(Wrapper)`
  width: 250px;
  color: #494949;
  align-items: center;
  justify-content: center;
  background-color: rgba(146, 154, 154, 0.26);
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    color: #3d3b3b;
  }
`
