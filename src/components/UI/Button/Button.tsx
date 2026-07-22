import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export const Button = styled.button<{ $variant?: ButtonVariant; $dark?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 26px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 15px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  ${({ $variant = 'primary', $dark, theme }) => {
    if ($variant === 'primary') {
      return css`
        background: ${theme.colors.brand};
        color: #fff;
        box-shadow: 0 8px 24px rgba(20, 99, 255, 0.28);

        &:hover {
          box-shadow: 0 10px 28px rgba(20, 99, 255, 0.38);
        }
      `
    }

    if ($variant === 'secondary') {
      return $dark
        ? css`
            background: transparent;
            color: ${theme.colors.darkTextPrimary};
            border-color: ${theme.colors.darkBorder};

            &:hover {
              border-color: ${theme.colors.brandGlow};
              background: rgba(47, 143, 255, 0.08);
            }
          `
        : css`
            background: ${theme.colors.surface};
            color: ${theme.colors.textPrimary};
            border-color: ${theme.colors.border};

            &:hover {
              border-color: ${theme.colors.brand};
              color: ${theme.colors.brand};
            }
          `
    }

    return css`
      background: transparent;
      color: ${$dark ? theme.colors.darkTextSecondary : theme.colors.textSecondary};

      &:hover {
        color: ${$dark ? theme.colors.darkTextPrimary : theme.colors.textPrimary};
      }
    `
  }}
`
