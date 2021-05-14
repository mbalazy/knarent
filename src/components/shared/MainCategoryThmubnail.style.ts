import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'

export const MainCategoryThumbnailWrapper = styled.article`
  ${cardBasicStyle}
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const ImageStyles = styled(GatsbyImage)`
  flex: 0 0 280px;
  border-radius: ${({ theme }) => theme.border.standard} ${({ theme }) => theme.border.standard} 0 0;
`
export const CopyWrapper = styled.div`
  flex: 1 1 200px;
  margin: 4rem 3rem 3rem;

  display: grid;
  gap: 3rem;
`
