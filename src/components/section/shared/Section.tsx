import React from 'react'
type SectionProps = {
  heading?: string
  subheading?: string
  children: JSX.Element | string | JSX.Element[]
}
import styled from 'styled-components'
import { H2, H3 } from '../../shared/Typography'

const SectionWrapper = styled.section`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 5%;
  text-align: center;
  gap: 6rem;
`

const Section = ({ heading, subheading, children }: SectionProps) => {
  return (
    <SectionWrapper>
      {heading && <H2>{heading}</H2>}
      {subheading && <H3>{subheading}</H3>}
      <>{children}</>
    </SectionWrapper>
  )
}

export default Section
