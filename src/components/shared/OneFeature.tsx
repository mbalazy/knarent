import React from 'react'
import { OneFeature as OneFeatureProps } from '../../../theme/CONSTS'
import { H4, P } from '../../../theme/Typography'
import { ImageStyles, OneFeatureWrapper } from './OneFeature.style'

const OneFeature = ({ icon, heading, copy }: OneFeatureProps) => {
  return (
    <OneFeatureWrapper>
      <ImageStyles src={icon} alt="" />
      <H4>{heading}</H4>
      <P>{copy}</P>
    </OneFeatureWrapper>
  )
}

export default OneFeature
