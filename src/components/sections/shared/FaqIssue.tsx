import React, { useState } from 'react'
import { OneIssue } from '../../../../theme/CONSTS'
import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../../../theme/globalStyle'
import { H4, P } from '../../../../theme/Typography'
import { ReactComponent as Arrow } from '../../../../images/arrow.svg'

type FaqIssueProps = {
  issue: OneIssue
}
type ArrowProps = {
  visibilityOfQuestion: boolean
}

const FaqIssueWrapper = styled.article`
  ${cardBasicStyle}
  padding: 2.4rem 3rem;
  text-align: left;
  cursor: pointer;
`
const QuestionStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const AnswerStyles = styled.div`
  padding-top: 2.4rem;
`
const ArrowStyles = styled.div<ArrowProps>`
  flex-shrink: 0;
  margin-left: 1rem;
  transform: rotate(0deg);
  transition: transform 80ms;

  ${({ visibilityOfQuestion }) =>
    visibilityOfQuestion &&
    css`
      transform: rotate(-90deg);
    `}
`

const FaqIssue = ({ issue: { question, answer } }: FaqIssueProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)
  return (
    <FaqIssueWrapper onClick={() => setIsAnswerVisible(!isAnswerVisible)}>
      <QuestionStyles>
        <H4>{question}</H4>
        <ArrowStyles visibilityOfQuestion={isAnswerVisible}>
          <Arrow />
        </ArrowStyles>
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
