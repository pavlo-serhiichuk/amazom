import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fff;
  height: 100px;
  margin-top: 10px;
  padding: 25px;
`
export const Confirm = styled.button`
  text-align: center;
  margin-top: 20px;
  width: 100%;
  height: 45px;
  background-color: #ffff1c;
  cursor: pointer;
  opacity: 0.9;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(253, 253, 16, 0.88);
  }

  &:active {
    background-color: #ffff08;
    border: 2px solid #3d76b0;
  }
`
