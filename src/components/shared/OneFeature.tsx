import React from 'react'
import { OneFeature as OneFeatureProps } from '../../../theme/CONSTS'
import styled from 'styled-components'
import { H4, P } from '../../../theme/Typography'
import { cardBasicStyle } from '../../../theme/globalStyle'

const OneFeatureWrapper = styled.article`
  ${cardBasicStyle}

  display: grid;
  justify-items: center;
  gap: 4rem;
  padding: 5rem 3rem;
`
const ImageStyles = styled.img`
  height: 8rem;
`

const OneFeature = ({ icon, heading, copy }: OneFeatureProps) => {
  return (
    <OneFeatureWrapper>
      <ImageStyles src={icon} alt={heading} />
      <H4>{heading}</H4>
      <P>{copy}</P>
    </OneFeatureWrapper>
  )
}

export default OneFeature
