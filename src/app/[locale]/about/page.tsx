import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('')

  return (
    <div className='px-8 py-24'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-800 to-blue-900 py-16 text-center text-white'>
        <h1 className='mb-4 text-5xl font-bold'>{t('about_us_title')}</h1>
        <p className='mx-auto max-w-3xl text-lg'>{t('about_us_description')}</p>
      </section>

      {/* Firm History */}
      <section className='py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('our_history_title')}
          </h2>
          <p className='text-lg leading-relaxed text-slate-600'>
            {t('our_history_description')}
          </p>
        </div>
      </section>

      {/* Notable Cases */}
      <section className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('notable_cases_title')}
          </h2>
          <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-1'>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('case_one_title')}
              </h3>
              <p className='text-slate-600'>{t('case_one_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('case_two_title')}
              </h3>
              <p className='text-slate-600'>{t('case_two_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('case_three_title')}
              </h3>
              <p className='text-slate-600'>{t('case_three_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('case_four_title')}
              </h3>
              <p className='text-slate-600'>{t('case_four_description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
