import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Container } from '../UI/Container'
import { GlowBackground } from '../UI/GlowBackground'
import { media } from '../../styles/breakpoints'

const Section = styled.section`
  position: relative;
  padding: 110px 0;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.darkBgAlt} 0%, ${({ theme }) => theme.colors.darkBg} 100%);
  overflow: hidden;
  text-align: center;

  ${media.tablet} {
    padding: 76px 0;
  }
`

const Title = styled.h2`
  position: relative;
  z-index: 1;
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.darkTextPrimary};
  max-width: 680px;
  margin: 0 auto;

  ${media.mobile} {
    font-size: 30px;
  }
`

const Subtitle = styled.p`
  position: relative;
  z-index: 1;
  margin: 20px auto 0;
  font-size: 17px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkTextSecondary};
  max-width: 560px;
`

export function CTASection() {
  const { t } = useTranslation()

  return (
    <Section>
      <GlowBackground />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Title>{t('cta.title')}</Title>
          <Subtitle>{t('cta.subtitle')}</Subtitle>
          {/* <Actions>
            <Button $variant="primary">
              {t('cta.button')}
              <HiArrowRight className="flip-rtl" />
            </Button>
          </Actions> */}
        </motion.div>
      </Container>
    </Section>
  )
}
