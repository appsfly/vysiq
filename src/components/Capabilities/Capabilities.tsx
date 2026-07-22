import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import {
  HiOutlineEye,
  HiOutlineMagnifyingGlass,
  HiOutlineBellAlert,
  HiOutlineChartBar,
  HiOutlineBuildingOffice2,
  HiOutlineSparkles,
} from 'react-icons/hi2'
import { Container } from '../UI/Container'
import { SectionTitle } from '../UI/SectionTitle'
import { FeatureCard } from '../UI/FeatureCard'
import { media } from '../../styles/breakpoints'

const Section = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.bg};

  ${media.tablet} {
    padding: 64px 0;
  }
`

const Grid = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`

const icons = [
  HiOutlineEye,
  HiOutlineMagnifyingGlass,
  HiOutlineChartBar,
  HiOutlineBellAlert,
  HiOutlineBuildingOffice2,
  HiOutlineSparkles,
]

export function Capabilities() {
  const { t } = useTranslation()
  const capabilities = t('capabilities.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <Section id="platform">
      <Container>
        <SectionTitle eyebrow={t('capabilities.eyebrow')} title={t('capabilities.title')} />
        <Grid>
          {capabilities.map((c, i) => (
            <FeatureCard key={c.title} icon={icons[i]} title={c.title} description={c.description} index={i} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
