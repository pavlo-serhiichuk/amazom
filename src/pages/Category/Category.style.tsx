import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`
export const ProductsWrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 100px);
  flex-direction: row;
  flex-wrap: wrap;
  align-content: start;
  gap: 10px;
  margin: 10px;
  overflow: scroll;
`