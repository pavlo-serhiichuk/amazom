import styled from 'styled-components'

interface IWrapperProps {
  bgc: string
}

export const Wrapper = styled.div<IWrapperProps>`
  min-height: calc(100vh - 110px);
  overflow: scroll;
  padding-top: 20px;
  background-color: ${({bgc}) => bgc};
`

export const Content = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
`

export const Products = styled.div``

