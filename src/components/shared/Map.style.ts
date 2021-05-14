import styled from 'styled-components'

export const containerStyle = {
  width: '100%',
  height: '100%',
}

export const InfoWindowStyles = styled.div`
  padding: 1.2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: space-between;
  align-items: flex-start;
`
export const LinkStyles = styled.a`
  padding: 0.6rem 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  align-self: stretch;
  text-align: center;
`
