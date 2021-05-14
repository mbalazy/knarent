import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'

type ArrowProps = {
  visibilityOfQuestion: boolean
}

export const FaqIssueWrapper = styled.article`
  ${cardBasicStyle}
  padding: 2.4rem 3rem;
  text-align: left;
  cursor: pointer;
`
export const QuestionStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AnswerStyles = styled.div`
  padding-top: 2.4rem;
`
export const ArrowStyles = styled.button<ArrowProps>`
  flex-shrink: 0;
  margin-left: 1rem;
  transform: rotate(0deg);
  transition: transform 80ms;

  background-color: transparent;
  border: transparent solid 2px !important;
  border-radius: 4px;
  padding: 0.8rem;
  outline: none;

  ${({ visibilityOfQuestion }) =>
    visibilityOfQuestion &&
    css`
      transform: rotate(-90deg);
    `}

  &:active,
  &:focus {
    border: ${({ theme }) => theme.colors.accent1} solid 2px !important;
  }
`
