import React from 'react'
import { H2, H3 } from '../../../theme/Typography'
import { ChildrenWrapper, SectionWrapper } from './Section.style'
type SectionProps = {
  heading?: string
  subheading?: string
  children: JSX.Element | string | JSX.Element[]
  id?: string
}

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
