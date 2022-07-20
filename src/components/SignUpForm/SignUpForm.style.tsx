import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Form = styled.form`
`

export const Grid = styled.form`
  display: grid;
  grid-template-columns: 100px 250px;
  gap: 10px;
  margin-bottom: 10px;
`

export const TitleWrapper = styled.h4`
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
  //padding: 10px;
`

export const Title = styled.span`
  background-color: #fff;
  padding: 0 10px;
`
export const Label = styled.label``

export const Input = styled.input`
  height: 30px;
  background-color: #fff;
  border: 1px solid #999
`

export const Submit = styled.input`
  width: 100%;
  background-color: #af09ff;
  color: #fff;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 5px;
`

export const A = styled(NavLink)`
  display: flex;
  justify-content: center;
  background-color: #af09ff;
  padding: 10px;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
`
