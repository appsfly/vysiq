import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { HiOutlineLanguage } from 'react-icons/hi2'

const Toggle = styled.button<{ $dark?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: 1px solid ${({ theme, $dark }) => ($dark ? theme.colors.darkBorder : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.darkTextPrimary : theme.colors.textPrimary)};
  transition: border-color 0.18s ease, color 0.18s ease;

  svg {
    font-size: 17px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.brand};
  }
`

interface LanguageSwitcherProps {
  dark?: boolean
  className?: string
}

export function LanguageSwitcher({ dark, className }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation()
  const isHebrew = i18n.language === 'he'
  const nextLanguage = isHebrew ? 'en' : 'he'

  return (
    <Toggle
      type="button"
      $dark={dark}
      className={className}
      onClick={() => i18n.changeLanguage(nextLanguage)}
      aria-label={t('nav.toggleLanguage')}
    >
      <HiOutlineLanguage />
      {isHebrew ? 'EN' : 'עברית'}
    </Toggle>
  )
}
