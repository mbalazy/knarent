import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../../../images/arrow.svg'
import { OneIssue } from '../../../theme/CONSTS'
import { H4, P } from '../../../theme/Typography'
import VisuallyHidden from '../shared/VisuallyHidden'
import { AnswerStyles, ArrowStyles, FaqIssueWrapper, QuestionStyles } from './FaqIssue.style'

type FaqIssueProps = {
  issue: OneIssue
}

const FaqIssue = ({ issue: { question, answer } }: FaqIssueProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)
  return (
    <FaqIssueWrapper onClick={() => setIsAnswerVisible(!isAnswerVisible)}>
      <QuestionStyles>
        <H4>{question}</H4>
        <ArrowStyles
          visibilityOfQuestion={isAnswerVisible}
          aria-label="pokaz odpowiedź"
          aria-expanded={isAnswerVisible}
        >
          <Arrow />
        </ArrowStyles>
        <VisuallyHidden>{answer}</VisuallyHidden>
      </QuestionStyles>
      {isAnswerVisible && (
        <AnswerStyles>
          <P>{answer}</P>
        </AnswerStyles>
      )}
    </FaqIssueWrapper>
  )
}

export default FaqIssue
