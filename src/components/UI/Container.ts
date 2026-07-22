import styled from 'styled-components'
import { media } from '../../styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 32px;

  ${media.mobile} {
    padding: 0 20px;
  }
`
