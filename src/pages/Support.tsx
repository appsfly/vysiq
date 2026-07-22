import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineUserCircle } from 'react-icons/hi2'
import { Container } from '../components/UI/Container'
import { media } from '../styles/breakpoints'

const Wrap = styled.div`
  padding: 160px 0 100px;
  min-height: 60vh;

  ${media.mobile} {
    padding: 140px 0 72px;
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
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 12px;

  ${media.mobile} {
    font-size: 30px;
  }
`

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 520px;
  margin-bottom: 48px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 720px;

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 28px;
  grid-column: span 2;

  ${media.mobile} {
    grid-column: span 1;
  }
`

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background: rgba(20, 99, 255, 0.08);
  color: ${({ theme }) => theme.colors.brand};
  font-size: 20px;
`

const InfoTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 8px;
`

const InfoBody = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 16px;
`

const InfoRow = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 4px;
  }

  a {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: underline;
  }
`

const TeamRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const TeamName = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`

const TeamRole = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export default function Support() {
  const { t } = useTranslation()

  return (
    <Wrap>
      <Container>
        <Eyebrow>{t('support.eyebrow')}</Eyebrow>
        <Title>{t('support.title')}</Title>
        <Subtitle>{t('support.subtitle')}</Subtitle>

        <Grid>
          <InfoCard>
            <IconWrap>
              <HiOutlineEnvelope />
            </IconWrap>
            <InfoTitle>{t('support.emailTitle')}</InfoTitle>
            <InfoBody>{t('support.emailBody')}</InfoBody>
            <InfoRow>
              <a href={`mailto:${t('support.email')}`}>{t('support.email')}</a>
            </InfoRow>
          </InfoCard>

          <InfoCard>
            <IconWrap>
              <HiOutlinePhone />
            </IconWrap>
            <InfoTitle>{t('support.phoneTitle')}</InfoTitle>
            <InfoBody>{t('support.phoneBody')}</InfoBody>
            <InfoRow>
              <span>{t('support.phonePrimaryLabel')}</span>
              <a href={`tel:${t('support.phonePrimary')}`}>{t('support.phonePrimary')}</a>
            </InfoRow>
            <InfoRow>
              <span>{t('support.phoneSecondaryLabel')}</span>
              <a href={`tel:${t('support.phoneSecondary')}`}>{t('support.phoneSecondary')}</a>
            </InfoRow>
          </InfoCard>

          <InfoCard>
            <IconWrap>
              <HiOutlineUserCircle />
            </IconWrap>
            <InfoTitle>{t('support.teamTitle')}</InfoTitle>
            <InfoBody>{t('support.teamBody')}</InfoBody>
            <TeamRow>
              <div>
                <TeamName>{t('support.teamName')}</TeamName>
                <TeamRole>{t('support.teamRole')}</TeamRole>
              </div>
            </TeamRow>
          </InfoCard>
        </Grid>
      </Container>
    </Wrap>
  )
}
