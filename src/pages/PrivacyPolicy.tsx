import { useTranslation, Trans } from 'react-i18next'
import { LegalPage } from '../components/LegalPage'

export default function PrivacyPolicy() {
  const { t } = useTranslation()

  return (
    <LegalPage eyebrow={t('legal.privacy.eyebrow')} title={t('legal.privacy.title')} updated={t('legal.privacy.updated')}>
      <h2>{t('legal.privacy.overview.heading')}</h2>
      <p>{t('legal.privacy.overview.body')}</p>

      <h2>{t('legal.privacy.collect.heading')}</h2>
      <ul>
        {(t('legal.privacy.collect.items', { returnObjects: true }) as string[]).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{t('legal.privacy.use.heading')}</h2>
      <p>{t('legal.privacy.use.body')}</p>

      <h2>{t('legal.privacy.retention.heading')}</h2>
      <p>{t('legal.privacy.retention.body')}</p>

      <h2>{t('legal.privacy.sharing.heading')}</h2>
      <p>{t('legal.privacy.sharing.body')}</p>

      <h2>{t('legal.privacy.contact.heading')}</h2>
      <p>
        <Trans
          i18nKey="legal.privacy.contact.body"
          values={{ email: t('legal.privacy.contact.email') }}
          components={{ 1: <a href={`mailto:${t('legal.privacy.contact.email')}`} /> }}
        />
      </p>
    </LegalPage>
  )
}
