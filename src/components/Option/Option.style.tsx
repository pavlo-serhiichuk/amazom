import styled from 'styled-components'

interface ImgProps {
    url: string
}

export const Wrapper = styled.div`
    position: relative;
`

export const Img = styled.div<ImgProps>`
    background-color: #fff;
    width: 415px;
    height: 720px;
    padding: 10px;
    position: relative; 
    background-image: url(${({url}) => url});
    background-position: left;
    background-repeat: no-repeat;
    background-size: 900px;
    box-sizing: border-box;
    transition: all ease-in-out 500ms;
    &:hover {
        box-shadow: 0 0 5px #74a82b; 
        width: 435px;
   }
`

export const Title = styled.span`
  position: absolute;
    background-color: #fff;
    top: 55px;
    font-weight: bold;
    font-size: 50px;
    padding: 15px;
`
