import React, { useState } from 'react'
import { OneIssue } from '../../../../theme/CONSTS'
import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../../../theme/globalStyle'
import { H4, P } from '../../../../theme/Typography'
import { ReactComponent as Arrow } from '../../../../images/arrow.svg'
import VisuallyHidden from '../../shared/VisuallyHidden'

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
const ArrowStyles = styled.button<ArrowProps>`
  flex-shrink: 0;
  margin-left: 1rem;
  transform: rotate(0deg);
  transition: transform 80ms;

  background-color: transparent;
  border: transparent solid 2px;
  outline: transparent solid 2px;

  ${({ visibilityOfQuestion }) =>
    visibilityOfQuestion &&
    css`
      transform: rotate(-90deg);
    `}

  &:active,
  &:focus {
    border: ${({ theme }) => theme.colors.accent1} solid 2px !important;
    border-radius: 4px;
    padding: 1rem;
  }
`

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
