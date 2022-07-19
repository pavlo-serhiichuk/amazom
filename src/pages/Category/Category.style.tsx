import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`
export const ProductsWrapper = styled.div`
  width: 100%;
  //display: grid;
  //grid-template-columns: 1fr 1fr 1fr;
  //grid-auto-flow: column;
  //grid-template-columns: repeat(auto-fill, 350px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`