import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { HiOutlineNewspaper } from 'react-icons/hi2'
import { Container } from '../components/UI/Container'
import { CTASection } from '../components/CTASection'
import { media } from '../styles/breakpoints'
import { useScrollUp } from './Support'

const Wrap = styled.div`
  padding: 160px 0 0;

  ${media.mobile} {
    padding: 140px 0 0;
  }
`

const Header = styled.div`
  padding-bottom: 64px;

  ${media.mobile} {
    padding-bottom: 48px;
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

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding: 72px 32px;
  margin-bottom: 96px;
  background: ${({ theme }) => theme.colors.bgAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  ${media.mobile} {
    padding: 56px 24px;
    margin-bottom: 64px;
  }
`

const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 99, 255, 0.08);
  color: ${({ theme }) => theme.colors.brand};
  font-size: 26px;
`

const PanelTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`

const PanelBody = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 460px;
`

export default function Blog() {
  useScrollUp()
  const { t } = useTranslation()

  return (
    <Wrap>
      <Container>
        <Header>
          <Eyebrow>{t('blog.eyebrow')}</Eyebrow>
          <Title>{t('blog.title')}</Title>
          <Subtitle>{t('blog.subtitle')}</Subtitle>
        </Header>

        <Panel>
          <IconWrap>
            <HiOutlineNewspaper />
          </IconWrap>
          <PanelTitle>{t('blog.comingSoonTitle')}</PanelTitle>
          <PanelBody>{t('blog.comingSoonBody')}</PanelBody>
        </Panel>
      </Container>

      <CTASection />
    </Wrap>
  )
}
