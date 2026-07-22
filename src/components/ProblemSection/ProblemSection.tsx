import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { HiOutlineVideoCameraSlash, HiOutlineExclamationTriangle, HiOutlinePuzzlePiece } from 'react-icons/hi2'
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

const icons = [HiOutlineVideoCameraSlash, HiOutlineExclamationTriangle, HiOutlinePuzzlePiece]

export function ProblemSection() {
  const { t } = useTranslation()
  const problems = t('problem.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <Section id="problem">
      <Container>
        <SectionTitle eyebrow={t('problem.eyebrow')} title={t('problem.title')} />
        <Grid>
          {problems.map((p, i) => (
            <FeatureCard key={p.title} icon={icons[i]} title={p.title} description={p.description} index={i} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
