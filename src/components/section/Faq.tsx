import React from 'react'
import CONSTS, { faqContent, OneIssue } from '../../../theme/CONSTS'
import FaqIssue from './shared/FaqIssue'
import Section from './shared/Section'
import styled from 'styled-components'

const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const Faq = () => {
  const { faqHeading } = CONSTS
  return (
    <Section heading={faqHeading}>
      <FaqWrapper>
        {faqContent.map((issue) => (
          <FaqIssue key={issue.question} issue={issue} />
        ))}
      </FaqWrapper>
    </Section>
  )
}

export default Faq
