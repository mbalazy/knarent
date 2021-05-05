import React from 'react'
import styled, { css } from 'styled-components'
import { H2, H3 } from '../../../theme/Typography'
type SectionProps = {
  heading?: string
  subheading?: string
  children: JSX.Element | string | JSX.Element[]
  id?: string
}

const SectionWrapper = styled.section`
  display: grid;
  align-items: center;
  gap: 6rem;

  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: 0 5%;
  text-align: center;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      h3 {
        margin: 0 6%;
      
    }
  `}
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
