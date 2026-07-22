import { motion } from 'framer-motion'
import styled from 'styled-components'
import type { IconType } from 'react-icons'

const Card = styled(motion.div)<{ $dark?: boolean }>`
  background: ${({ theme, $dark }) => ($dark ? theme.colors.darkBgAlt : theme.colors.surface)};
  border: 1px solid ${({ theme, $dark }) => ($dark ? theme.colors.darkBorder : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 32px 28px;
  height: 100%;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: ${({ theme, $dark }) => (!$dark ? theme.shadow.card : 'none')};

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.brand};
    box-shadow: 0 0 0 1px rgba(20, 99, 255, 0.15), 0 12px 32px rgba(20, 99, 255, 0.12);
  }
`

const IconWrap = styled.div<{ $dark?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background: ${({ $dark }) => ($dark ? 'rgba(47, 143, 255, 0.12)' : 'rgba(20, 99, 255, 0.08)')};
  color: ${({ theme, $dark }) => ($dark ? theme.colors.brandGlow : theme.colors.brand)};
  font-size: 22px;
`

const CardTitle = styled.h3<{ $dark?: boolean }>`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.darkTextPrimary : theme.colors.textPrimary)};
`

const CardBody = styled.p<{ $dark?: boolean }>`
  font-size: 15px;
  line-height: 1.65;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.darkTextSecondary : theme.colors.textSecondary)};
`

interface FeatureCardProps {
  icon: IconType
  title: string
  description: string
  dark?: boolean
  index?: number
}

export function FeatureCard({ icon: Icon, title, description, dark, index = 0 }: FeatureCardProps) {
  return (
    <Card
      $dark={dark}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
    >
      <IconWrap $dark={dark}>
        <Icon />
      </IconWrap>
      <CardTitle $dark={dark}>{title}</CardTitle>
      <CardBody $dark={dark}>{description}</CardBody>
    </Card>
  )
}
