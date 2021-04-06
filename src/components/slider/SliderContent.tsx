import styled from 'styled-components'
type SliderContentProps = {
  translateX?: number
  transition?: number
  width?: number
}

const SliderContent = styled.div<SliderContentProps>`
  transform: translateX(-${(props) => props.translateX}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
  width: ${(props) => props.width}px;
  display: flex;
`
export default SliderContent
