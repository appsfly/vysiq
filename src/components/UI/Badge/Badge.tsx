import styled from 'styled-components'

export const Badge = styled.span<{ $dark?: boolean; $tone?: 'brand' | 'success' | 'warning' | 'danger' }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: ${({ $dark, $tone }) => {
    if ($tone === 'success') return 'rgba(45, 212, 167, 0.12)'
    if ($tone === 'warning') return 'rgba(246, 185, 74, 0.14)'
    if ($tone === 'danger') return 'rgba(255, 92, 108, 0.12)'
    return $dark ? 'rgba(47, 143, 255, 0.12)' : 'rgba(20, 99, 255, 0.08)'
  }};
  color: ${({ theme, $dark, $tone }) => {
    if ($tone === 'success') return theme.colors.success
    if ($tone === 'warning') return theme.colors.warning
    if ($tone === 'danger') return theme.colors.danger
    return $dark ? theme.colors.brandGlow : theme.colors.brand
  }};
  border: 1px solid
    ${({ $dark, $tone }) => {
      if ($tone === 'success') return 'rgba(45, 212, 167, 0.3)'
      if ($tone === 'warning') return 'rgba(246, 185, 74, 0.35)'
      if ($tone === 'danger') return 'rgba(255, 92, 108, 0.3)'
      return $dark ? 'rgba(47, 143, 255, 0.3)' : 'rgba(20, 99, 255, 0.2)'
    }};

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`
