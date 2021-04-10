import React from 'react'
import { OneFeature as OneFeatureProps } from '../../../../theme/CONSTS'
import styled from 'styled-components'
import { H4, P } from '../../shared/Typography'

const OneFeatureWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1 1 260px;
  padding: 5rem 3%;

  box-shadow: 0px 34px 53px -7px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
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
