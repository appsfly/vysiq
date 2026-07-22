import { motion } from 'framer-motion'
import styled from 'styled-components'
import { media } from '../../../styles/breakpoints'

const Eyebrow = styled.span<{ $dark?: boolean }>`
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.brandGlow : theme.colors.brand)};
  margin-bottom: 14px;
`

const Title = styled.h2<{ $dark?: boolean }>`
  font-size: 44px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.darkTextPrimary : theme.colors.textPrimary)};
  max-width: 720px;

  ${media.mobile} {
    font-size: 32px;
  }
`

const Subtitle = styled.p<{ $dark?: boolean }>`
  margin-top: 18px;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.darkTextSecondary : theme.colors.textSecondary)};
  max-width: 620px;
`

const Wrap = styled.div<{ $align?: 'left' | 'center' }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};
  text-align: ${({ $align }) => ($align === 'center' ? 'center' : 'start')};

  ${Title}, ${Subtitle} {
    ${({ $align }) => $align === 'center' && 'margin-left: auto; margin-right: auto;'}
  }
`

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  dark?: boolean
  align?: 'left' | 'center'
}

export function SectionTitle({ eyebrow, title, subtitle, dark, align = 'left' }: SectionTitleProps) {
  return (
    <Wrap $align={align}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {eyebrow && <Eyebrow $dark={dark}>{eyebrow}</Eyebrow>}
        <Title $dark={dark}>{title}</Title>
        {subtitle && <Subtitle $dark={dark}>{subtitle}</Subtitle>}
      </motion.div>
    </Wrap>
  )
}
