import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Form = styled.form`
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
export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
`

export const Input = styled.input`
  height: 30px;
  width: 200px;
  background-color: #fff;
  border: 1px solid #999
`

export const Submit = styled.input`
  width: 100%;
  background-color: #af09ff;
  color: #fff;
  padding: 12px;
  text-align: center;
  box-sizing: border-box;
  margin: 10px 0;
`

export const A = styled(NavLink)`
  display: flex;
  justify-content: center;
  background-color: #af09ff;
  padding: 10px;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  margin: 10px 0;

`
