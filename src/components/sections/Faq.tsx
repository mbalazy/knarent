import React from 'react'
import CONSTS, { faqContent } from '../../../theme/CONSTS'
import FaqIssue from '../shared/FaqIssue'
import Section from '../shared/Section'
import styled from 'styled-components'

const FaqWrapper = styled.div`
  display: grid;
  gap: 4rem;
`

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
