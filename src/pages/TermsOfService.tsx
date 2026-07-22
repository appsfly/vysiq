import { useTranslation, Trans } from 'react-i18next'
import { LegalPage } from '../components/LegalPage'

export default function TermsOfService() {
  const { t } = useTranslation()

  return (
    <LegalPage eyebrow={t('legal.terms.eyebrow')} title={t('legal.terms.title')} updated={t('legal.terms.updated')}>
      <h2>{t('legal.terms.agreement.heading')}</h2>
      <p>{t('legal.terms.agreement.body')}</p>

      <h2>{t('legal.terms.use.heading')}</h2>
      <p>{t('legal.terms.use.body')}</p>

      <h2>{t('legal.terms.accounts.heading')}</h2>
      <p>{t('legal.terms.accounts.body')}</p>

      <h2>{t('legal.terms.availability.heading')}</h2>
      <p>{t('legal.terms.availability.body')}</p>

      <h2>{t('legal.terms.liability.heading')}</h2>
      <p>{t('legal.terms.liability.body')}</p>

      <h2>{t('legal.terms.changes.heading')}</h2>
      <p>{t('legal.terms.changes.body')}</p>

      <h2>{t('legal.terms.contact.heading')}</h2>
      <p>
        <Trans
          i18nKey="legal.terms.contact.body"
          values={{ email: t('legal.terms.contact.email') }}
          components={{ 1: <a href={`mailto:${t('legal.terms.contact.email')}`} /> }}
        />
      </p>
    </LegalPage>
  )
}
