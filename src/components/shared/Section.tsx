import React from 'react'
type SectionProps = {
  heading?: string
  subheading?: string
  children: JSX.Element | string | JSX.Element[]
  id?: string
}
import styled from 'styled-components'
import { H2, H3 } from '../../../theme/Typography'

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;

  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: 0 5%;
  text-align: center;
`
const ChildrenWrapper = styled.div`
  width: 90vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
`

const Section = ({ heading, subheading, children, id }: SectionProps) => {
  return (
    <SectionWrapper id={id}>
      {heading && <H2>{heading}</H2>}
      {subheading && <H3>{subheading}</H3>}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </SectionWrapper>
  )
}

export default Section
