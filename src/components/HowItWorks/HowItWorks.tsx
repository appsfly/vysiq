import { Fragment } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import { HiOutlineVideoCamera, HiOutlineCpuChip, HiOutlineLightBulb, HiOutlineBolt } from 'react-icons/hi2'
import { Container } from '../UI/Container'
import { SectionTitle } from '../UI/SectionTitle'
import { media } from '../../styles/breakpoints'

const Section = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.bgAlt};

  ${media.tablet} {
    padding: 64px 0;
  }
`

const Flow = styled.div`
  margin-top: 56px;
  display: flex;
  align-items: stretch;
  gap: 0;

  ${media.tablet} {
    flex-direction: column;
    gap: 16px;
  }
`

const StepCard = styled(motion.div)`
  flex: 1;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 28px 24px;
  box-shadow: ${({ theme }) => theme.shadow.card};
`

const StepNumber = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brand};
  letter-spacing: 0.08em;
  margin-bottom: 14px;
`

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: rgba(20, 99, 255, 0.08);
  color: ${({ theme }) => theme.colors.brand};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 16px;
`

const StepTitle = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 8px;
`

const StepBody = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 20px;
  flex-shrink: 0;

  ${media.tablet} {
    width: auto;
    transform: rotate(90deg);
    margin: -4px 0;
  }
`

const Diagram = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};

  span.node {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 8px 16px;
    border-radius: 999px;
  }
`

const icons = [HiOutlineVideoCamera, HiOutlineCpuChip, HiOutlineLightBulb, HiOutlineBolt]

export function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('howItWorks.steps', { returnObjects: true }) as { title: string; body: string }[]
  const diagram = t('howItWorks.diagram', { returnObjects: true }) as string[]

  return (
    <Section id="how-it-works">
      <Container>
        <SectionTitle eyebrow={t('howItWorks.eyebrow')} title={t('howItWorks.title')} align="center" />

        <Flow>
          {steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <Fragment key={step.title}>
                <StepCard
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <StepNumber>{`0${i + 1}`}</StepNumber>
                  <IconWrap>
                    <Icon />
                  </IconWrap>
                  <StepTitle>{step.title}</StepTitle>
                  <StepBody>{step.body}</StepBody>
                </StepCard>
                {i < steps.length - 1 && (
                  <Arrow>
                    <HiOutlineArrowRight className="flip-rtl" />
                  </Arrow>
                )}
              </Fragment>
            )
          })}
        </Flow>

        <Diagram>
          {diagram.map((node, i) => (
            <Fragment key={node}>
              <span className="node">{node}</span>
              {i < diagram.length - 1 && <HiOutlineArrowRight className="flip-rtl" />}
            </Fragment>
          ))}
        </Diagram>
      </Container>
    </Section>
  )
}
