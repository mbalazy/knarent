import React from 'react'
import CONSTS, { faqContent } from '../../../theme/CONSTS'
import FaqIssue from '../shared/FaqIssue'
import Section from '../shared/Section'
import { FaqWrapper } from './Faq.style'

const Faq = () => {
  const { faqHeading } = CONSTS
  return (
    <Section id="faq" heading={faqHeading}>
      <FaqWrapper>
        {faqContent.map((issue) => (
          <FaqIssue key={issue.question} issue={issue} />
        ))}
      </FaqWrapper>
    </Section>
  )
}

export default Faq
