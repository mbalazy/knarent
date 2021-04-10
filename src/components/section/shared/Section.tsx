import React from 'react'
type SectionProps = {
  heading?: string
  subheading?: string
  children: JSX.Element | string
}
import styled from 'styled-components'

const SectionWrapper = styled.section`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 8rem 7%;
  text-align: center;
`
const SubheadingStyles = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 1.3;
`

const Section = ({ heading, subheading, children }: SectionProps) => {
  return (
    <SectionWrapper>
      <h2>{heading}</h2>
      <SubheadingStyles>{subheading}</SubheadingStyles>
      <p>{children}</p>
    </SectionWrapper>
  )
}

export default Section
