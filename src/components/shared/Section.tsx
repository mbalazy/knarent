import React from 'react'
import { H2 } from '../../../theme/Typography'
import { ChildrenWrapper, SectionWrapper, Subheading } from './Section.style'
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
      {subheading && <Subheading>{subheading}</Subheading>}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </SectionWrapper>
  )
}

export default Section
