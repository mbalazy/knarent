import React from 'react'
type SectionProps = {
  heading?: string
  subheading?: string
  children: JSX.Element | string | JSX.Element[]
}
import styled from 'styled-components'
import { H2, H3 } from '../../../theme/Typography'

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6rem;

  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: 0 5%;
  text-align: center;
`
const ChildrenWrapper = styled.div`
  width: 90vw;
  max-width: 1200px;
`

const Section = ({ heading, subheading, children }: SectionProps) => {
  return (
    <SectionWrapper>
      {heading && <H2>{heading}</H2>}
      {subheading && <H3>{subheading}</H3>}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </SectionWrapper>
  )
}

export default Section
