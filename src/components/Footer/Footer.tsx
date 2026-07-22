import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HiOutlineCube } from 'react-icons/hi2'
import { Container } from '../UI/Container'
import { media } from '../../styles/breakpoints'

const Wrap = styled.footer`
  background: ${({ theme }) => theme.colors.darkBg};
  padding: 72px 0 32px;
`

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.4fr repeat(4, 1fr);
  gap: 32px;
  padding-bottom: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkBorder};

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkTextPrimary};
  margin-bottom: 12px;

  svg {
    color: ${({ theme }) => theme.colors.brandGlow};
    font-size: 24px;
  }
`

const Tagline = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkTextSecondary};
  max-width: 260px;
`

const ColumnTitle = styled.h4`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.darkTextPrimary};
  margin-bottom: 18px;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const FooterLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkTextSecondary};
  transition: color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.darkTextPrimary};
  }
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.darkTextSecondary};
  flex-wrap: wrap;
  gap: 12px;
`

const BottomLinks = styled.div`
  display: flex;
  gap: 24px;
`

const columnKeys = ['platform', 'solutions', 'company', 'resources'] as const

const columnRoutes: Partial<Record<(typeof columnKeys)[number], string[]>> = {
  company: ['/about', '/blog'],
  resources: ['/case-studies', '/support'],
}

export function Footer() {
  const { t } = useTranslation()

  const columns = columnKeys.map((key) => ({
    key,
    title: t(`footer.columns.${key}.title`),
    links: t(`footer.columns.${key}.links`, { returnObjects: true }) as string[],
  }))

  return (
    <Wrap>
      <Container>
        <Top>
          <div>
            <Brand to="/">
              <HiOutlineCube />
              Vysiq AI
            </Brand>
            <Tagline>{t('footer.tagline')}</Tagline>
          </div>

          {columns.map((col) => (
            <div key={col.key}>
              <ColumnTitle>{col.title}</ColumnTitle>
              <LinkList>
                {col.links.map((link, i) => {
                  const to = columnRoutes[col.key]?.[i]
                  return (
                    <li key={link}>
                      {to ? (
                        <FooterLink as={Link} to={to}>
                          {link}
                        </FooterLink>
                      ) : (
                        <FooterLink href="#">{link}</FooterLink>
                      )}
                    </li>
                  )
                })}
              </LinkList>
            </div>
          ))}
        </Top>

        <Bottom>
          <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
          <BottomLinks>
            <FooterLink as={Link} to="/privacy-policy">
              {t('footer.privacy')}
            </FooterLink>
            <FooterLink as={Link} to="/terms-of-service">
              {t('footer.terms')}
            </FooterLink>
            <FooterLink as={Link} to="/contact">
              {t('footer.contact')}
            </FooterLink>
          </BottomLinks>
        </Bottom>
      </Container>
    </Wrap>
  )
}
