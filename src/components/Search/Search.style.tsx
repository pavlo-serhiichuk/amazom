import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  @media screen and (max-width: 835px) {display: none;}

`

export const Input = styled.input`
  font-size: 20px;
  border-radius: 7px 0 0 7px;
  width: 560px;
  height: 50px;
  box-sizing: border-box;
  padding-left: 10px;
  background-color: #fff;
  @media screen and (max-width: 1200px) {width: 300px;}
  @media screen and (max-width: 992px) {width: 200px;}
`

export const Button = styled.button`
  font-size: 20px;
  height: 50px;
  color: #fff;
  background-color: #af09ff;
  border-radius: 0 7px 7px 0;
  padding: 10px;
  box-sizing: border-box;
`
