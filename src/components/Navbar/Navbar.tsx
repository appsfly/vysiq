import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { HiOutlineCube } from 'react-icons/hi2'
import { Button } from '../UI/Button'
import { Container } from '../UI/Container'
import { LanguageSwitcher } from '../UI/LanguageSwitcher'
import { media } from '../../styles/breakpoints'

type NavLinkKey = 'platform' | 'solutions' | 'howItWorks' | 'about'

const NAV_LINKS: { key: NavLinkKey; href?: string; to?: string }[] = [
  { key: 'platform', href: '#platform' },
  { key: 'solutions', href: '#solutions' },
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'about', to: '/about' },
]

const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease;
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(247, 249, 252, 0.85)' : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(14px)' : 'none')};
  border-bottom: 1px solid ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : 'transparent')};
`

const Row = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
`

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};

  svg {
    color: ${({ theme }) => theme.colors.brand};
    font-size: 24px;
  }
`

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;

  ${media.tablet} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${media.tablet} {
    display: none;
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.textPrimary};

  ${media.tablet} {
    display: flex;
  }
`

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  ${media.tablet} {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    gap: 4px;
    padding: 8px 20px 24px;
    background: ${({ theme }) => theme.colors.bg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    ${NavLink} {
      padding: 12px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`

const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;

  button {
    width: 100%;
  }
`

export function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Bar $scrolled={scrolled}>
      <Row>
        <Brand to="/">
          <HiOutlineCube />
          VisionOps AI
        </Brand>

        <Links>
          {NAV_LINKS.map((link) =>
            link.to ? (
              <NavLink key={link.key} as={Link} to={link.to}>
                {t(`nav.${link.key}`)}
              </NavLink>
            ) : (
              <NavLink key={link.key} href={link.href}>
                {t(`nav.${link.key}`)}
              </NavLink>
            )
          )}
        </Links>
{/* 
        <Actions>
          <LanguageSwitcher />
          <Button $variant="primary">{t('nav.bookDemo')}</Button>
        </Actions> */}

        <MenuButton onClick={() => setOpen((v) => !v)} aria-label={t('nav.toggleMenu')}>
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </MenuButton>
      </Row>

      <MobileMenu $open={open}>
        {NAV_LINKS.map((link) =>
          link.to ? (
            <NavLink key={link.key} as={Link} to={link.to} onClick={() => setOpen(false)}>
              {t(`nav.${link.key}`)}
            </NavLink>
          ) : (
            <NavLink key={link.key} href={link.href} onClick={() => setOpen(false)}>
              {t(`nav.${link.key}`)}
            </NavLink>
          )
        )}
        {/* <MobileActions>
          <LanguageSwitcher />
          <Button $variant="primary">{t('nav.bookDemo')}</Button>
        </MobileActions> */}
      </MobileMenu>
    </Bar>
  )
}
