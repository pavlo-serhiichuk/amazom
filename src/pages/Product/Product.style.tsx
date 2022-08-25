import styled from 'styled-components'

interface ImgProps {
  url: string
}

export const Wrapper = styled.div`
  margin: auto;
  width: 1200px;
`

export const Content = styled.div`
  display: flex;
  justify-content: left;
  gap: 15px;
`

export const Title = styled.p`
  font-size: 40px;
`

export const ImgContainer = styled.div`
  //border: 1px solid red;
`

export const Img = styled.div<ImgProps>`
  background-color: #fff;
  width: 400px;
  height: 420px;
  background-image: url(${({url}) => url});
  background-position: top;
  background-size: 300px;
  background-repeat: no-repeat;
  transition: all ease-in-out 200ms;
  background-color: rgba(211, 211, 211, 0.13);

  &:hover {
    opacity: 0.9;
  }
`

export const Info = styled.div`
`

export const Field = styled.div`
  display: flex;
  justify-content: left;
  gap: 25px;
  gap: 25px;
  padding-bottom: 10px;
`

export const Property = styled.div`
  width: 100px;
  font-weight: bold;
`
export const Description = styled.div`

`
