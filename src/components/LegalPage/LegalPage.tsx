import type { ReactNode } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Container } from '../UI/Container'
import { media } from '../../styles/breakpoints'

const Wrap = styled.div`
  padding: 160px 0 100px;
  min-height: 60vh;

  ${media.mobile} {
    padding: 140px 0 72px;
  }
`

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: 12px;
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 8px;

  ${media.mobile} {
    font-size: 30px;
  }
`

const Updated = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 48px;
`

const Body = styled.div`
  max-width: 760px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 40px 0 12px;
  }

  h2:first-child {
    margin-top: 0;
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 16px;
  }

  ul {
    margin: 0 0 16px;
    padding-inline-start: 20px;
  }

  li {
    font-size: 15px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 8px;
  }

  a {
    color: ${({ theme }) => theme.colors.brand};
    text-decoration: underline;
  }
`

interface LegalPageProps {
  eyebrow: string
  title: string
  updated: string
  children: ReactNode
}

export function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  const { t } = useTranslation()

  return (
    <Wrap>
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
        <Updated>{t('legal.updatedLabel', { date: updated })}</Updated>
        <Body>{children}</Body>
      </Container>
    </Wrap>
  )
}
