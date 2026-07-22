import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Container } from '../UI/Container'
import { Badge } from '../UI/Badge'
import { GlowBackground } from '../UI/GlowBackground'
import { ProductPreview } from '../ProductPreview'
import { media } from '../../styles/breakpoints'

const Section = styled.section`
  position: relative;
  padding: 168px 0 96px;
  background: ${({ theme }) => theme.colors.bg};
  overflow: hidden;

  ${media.tablet} {
    padding: 140px 0 64px;
  }
`

const Grid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 56px;
  align-items: center;

  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
  }
`

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h1`
  margin-top: 22px;
  font-size: 60px;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};

  span.accent {
    display: block;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 700;
  }

  ${media.desktop} {
    font-size: 50px;
  }

  ${media.tablet} {
    font-size: 42px;
  }

  ${media.mobile} {
    font-size: 36px;
  }
`

const Subtitle = styled.p`
  margin-top: 22px;
  font-size: 18px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 520px;

  ${media.mobile} {
    font-size: 16px;
  }
`

export function Hero() {
  const { t } = useTranslation()

  return (
    <Section>
      <GlowBackground />
      <Container>
        <Grid>
          <Copy>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge>
                <span className="dot" />
                {t('hero.badge')}
              </Badge>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Title>
                {t('hero.titleLine1')}
                <span className="accent">{t('hero.titleLine2')}</span>
              </Title>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Subtitle>{t('hero.subtitle')}</Subtitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* <Actions>
                <Button $variant="primary">
                  {t('hero.ctaPrimary')}
                  <HiArrowRight className="flip-rtl" />
                </Button>
                <Button $variant="secondary">
                  <HiOutlinePlay />
                  {t('hero.ctaSecondary')}
                </Button>
              </Actions> */}
            </motion.div>
          </Copy>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          >
            <ProductPreview />
          </motion.div>
        </Grid>
      </Container>
    </Section>
  )
}
