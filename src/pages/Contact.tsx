import type { FormEvent } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Container } from '../components/UI/Container'
import { Button } from '../components/UI/Button'
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
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`

const inputStyles = `
  font-size: 15px;
  font-family: inherit;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid;
`

const Input = styled.input`
  ${inputStyles}
  border-color: ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brand};
  }
`

const Textarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 120px;
  border-color: ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brand};
  }
`

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 28px;
  height: fit-content;
`

const InfoTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 16px;
`

const InfoRow = styled.div`
  margin-bottom: 16px;

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

  a,
  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  a {
    text-decoration: underline;
  }
`

export default function Contact() {
  const { t } = useTranslation()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Wrap>
      <Container>
        <Eyebrow>{t('contact.eyebrow')}</Eyebrow>
        <Title>{t('contact.title')}</Title>
        <Subtitle>{t('contact.subtitle')}</Subtitle>

        <Grid>
          <Form onSubmit={handleSubmit}>
            <Field>
              {t('contact.fields.name')}
              <Input type="text" name="name" placeholder={t('contact.placeholders.name')} required />
            </Field>
            <Field>
              {t('contact.fields.workEmail')}
              <Input type="email" name="email" placeholder={t('contact.placeholders.email')} required />
            </Field>
            <Field>
              {t('contact.fields.company')}
              <Input type="text" name="company" placeholder={t('contact.placeholders.company')} />
            </Field>
            <Field>
              {t('contact.fields.message')}
              <Textarea name="message" placeholder={t('contact.placeholders.message')} required />
            </Field>
            <Button type="submit" $variant="primary">
              {t('contact.send')}
            </Button>
          </Form>

          <InfoCard>
            <InfoTitle>{t('contact.infoTitle')}</InfoTitle>
            <InfoRow>
              <span>{t('contact.emailLabel')}</span>
              <a href="mailto:hello@visionops.ai">hello@visionops.ai</a>
            </InfoRow>
            <InfoRow>
              <span>{t('contact.salesLabel')}</span>
              <a href="mailto:sales@visionops.ai">sales@visionops.ai</a>
            </InfoRow>
            <InfoRow>
              <span>{t('contact.supportLabel')}</span>
              <a href="mailto:support@visionops.ai">support@visionops.ai</a>
            </InfoRow>
          </InfoCard>
        </Grid>
      </Container>
    </Wrap>
  )
}
