import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { HiOutlineCheckCircle } from 'react-icons/hi2'
import { Container } from '../UI/Container'
import { SectionTitle } from '../UI/SectionTitle'
import { useCaseKeys, type UseCaseKey } from '../../data/useCases'
import { media } from '../../styles/breakpoints'

const Section = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.bg};

  ${media.tablet} {
    padding: 64px 0;
  }
`

const TabList = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 0;
`

const Tab = styled.button<{ $active: boolean }>`
  position: relative;
  background: none;
  border: none;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme, $active }) => ($active ? theme.colors.brand : theme.colors.textSecondary)};
  transition: color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
  }

  &::after {
    content: '';
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: -1px;
    height: 2px;
    background: ${({ theme }) => theme.colors.brand};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transition: transform 0.22s ease;
  }
`

const Panel = styled.div`
  margin-top: 36px;
  min-height: 220px;
`

const PointsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`

const Point = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: ${({ theme }) => theme.shadow.card};

  svg {
    flex-shrink: 0;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.visionAccent};
    margin-top: 1px;
  }
`

export function UseCases() {
  const { t } = useTranslation()
  const [active, setActive] = useState<UseCaseKey>(useCaseKeys[0])

  const tabs = useCaseKeys.map((key) => ({
    key,
    label: t(`useCases.tabs.${key}.label`),
    points: t(`useCases.tabs.${key}.points`, { returnObjects: true }) as string[],
  }))
  const current = tabs.find((tab) => tab.key === active) ?? tabs[0]

  return (
    <Section id="solutions">
      <Container>
        <SectionTitle eyebrow={t('useCases.eyebrow')} title={t('useCases.title')} />

        <TabList role="tablist">
          {tabs.map((tab) => (
            <Tab key={tab.key} role="tab" $active={tab.key === active} onClick={() => setActive(tab.key)}>
              {tab.label}
            </Tab>
          ))}
        </TabList>

        <Panel>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <PointsGrid>
                {current.points.map((point) => (
                  <Point key={point}>
                    <HiOutlineCheckCircle />
                    {point}
                  </Point>
                ))}
              </PointsGrid>
            </motion.div>
          </AnimatePresence>
        </Panel>
      </Container>
    </Section>
  )
}
