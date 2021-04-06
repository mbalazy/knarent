import { useState } from 'react'
import styled, { css } from 'styled-components'
import SliderContent from './SliderContent'
import Slide from './Slide'

export const MainSliderHeight = css`
  height: calc(100vh - 70px);
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
`

const SliderWrapperStyles = styled.div`
  position: relative;
  ${MainSliderHeight};
  width: 100%;
  overflow: hidden;
`

const Slider = () => {
  // TODO move getWidth to new file
  let getWidth = () => 0

  if (typeof window !== 'undefined') {
    // browser code
    getWidth = () => window?.innerWidth || 0
  }

  const [state, setState] = useState({
    translateX: 0,
    transition: 0.45,
  })

  const { translateX, transition } = state

  const img =
    'https://www.knarent.pl/static/4c0f0101a44adb22a085f4eb127a05e6/99238/spencer-davis-YEmsw57gYa8-hero.webp'

  return (
    <SliderWrapperStyles>
      <SliderContent translateX={translateX} transition={transition} width={getWidth()}>
        <Slide imgUrl={img}>
          <p>KSJFH KSHkfj</p>
        </Slide>
      </SliderContent>
    </SliderWrapperStyles>
  )
}

export default Slider
