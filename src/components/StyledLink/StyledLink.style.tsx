import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const A = styled(Link)`
  padding: 5px 20px;
  color: #000;

  &:hover {
    color: #730ca6;
  }
  
  &:focus {
    color: #730ca6;
  }
`

export const Text = styled.div`
  color: #fff;
`

