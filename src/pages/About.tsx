import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { HiOutlineEye, HiOutlineShieldCheck, HiOutlineVideoCamera, HiOutlineUserGroup } from 'react-icons/hi2'
import { Container } from '../components/UI/Container'
import { FeatureCard } from '../components/UI/FeatureCard'
import { CTASection } from '../components/CTASection'
import { media } from '../styles/breakpoints'

const Wrap = styled.div`
  padding: 160px 0 0;

  ${media.mobile} {
    padding: 140px 0 0;
  }
`

const Header = styled.div`
  padding-bottom: 80px;

  ${media.mobile} {
    padding-bottom: 56px;
  }
`

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: 12px;
`

const Title = styled.h1`
  font-size: 44px;
  font-weight: 800;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.textPrimary};
  max-width: 680px;
  margin-bottom: 20px;

  ${media.mobile} {
    font-size: 32px;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 620px;
`

const Mission = styled.section`
  padding: 0 0 88px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 64px;

  ${media.mobile} {
    padding-bottom: 56px;
    padding-top: 48px;
  }
`

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const MissionTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 16px;
`

const MissionBody = styled.p`
  font-size: 16px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};

  & + & {
    margin-top: 16px;
  }
`

const Values = styled.section`
  padding: 0 0 96px;
  background: ${({ theme }) => theme.colors.bgAlt};
  margin: 0 -1px;
  padding-top: 72px;

  ${media.mobile} {
    padding-bottom: 64px;
    padding-top: 56px;
  }
`

const ValuesTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 40px;
  max-width: 560px;

  ${media.mobile} {
    font-size: 24px;
    margin-bottom: 28px;
  }
`

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`

const valueIcons = [HiOutlineVideoCamera, HiOutlineEye, HiOutlineShieldCheck, HiOutlineUserGroup]

export default function About() {
  const { t } = useTranslation()
  const values = t('about.values', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <Wrap>
      <Container>
        <Header>
          <Eyebrow>{t('about.eyebrow')}</Eyebrow>
          <Title>{t('about.title')}</Title>
          <Subtitle>{t('about.subtitle')}</Subtitle>
        </Header>

        <Mission>
          <MissionGrid>
            <div>
              <MissionTitle>{t('about.missionTitle1')}</MissionTitle>
              <MissionBody>{t('about.missionBody1a')}</MissionBody>
              <MissionBody>{t('about.missionBody1b')}</MissionBody>
            </div>
            <div>
              <MissionTitle>{t('about.missionTitle2')}</MissionTitle>
              <MissionBody>{t('about.missionBody2a')}</MissionBody>
              <MissionBody>{t('about.missionBody2b')}</MissionBody>
            </div>
          </MissionGrid>
        </Mission>
      </Container>

      <Values>
        <Container>
          <ValuesTitle>{t('about.valuesTitle')}</ValuesTitle>
          <ValuesGrid>
            {values.map((v, i) => (
              <FeatureCard key={v.title} icon={valueIcons[i]} title={v.title} description={v.description} index={i} />
            ))}
          </ValuesGrid>
        </Container>
      </Values>

      <CTASection />
    </Wrap>
  )
}
