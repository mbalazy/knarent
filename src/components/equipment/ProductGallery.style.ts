import styled, { css } from 'styled-components'

export const ProductGalleryWrapper = styled.div`
  width: 100%;
  height: 54rem;
  padding: ${({ theme }) => theme.dimensions.equipmentGap};

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      width: 70%;
      height: auto;
      padding: 0;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      width: 90%;
    }
  `}
`
export const BigImageStyles = styled.div`
  margin-top: auto;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      margin-bottom: 2rem;
    }
  `}
`
export const SmallerImagesStyles = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  margin-top: auto;

  & > * {
    flex: 0 1 8rem;
  }
`
