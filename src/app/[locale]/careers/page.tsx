import { useTranslations } from 'next-intl'

export default function Careers() {
  const t = useTranslations('')

  return (
    <div className='px-8 py-24'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-green-800 to-green-600 py-16 text-center text-white'>
        <h1 className='mb-4 text-5xl font-bold'>{t('careers_title')}</h1>
        <p className='mx-auto max-w-3xl text-lg'>{t('careers_description')}</p>
      </section>

      {/* Alumni and Legacy */}
      <section className='py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('alumni_legacy_title')}
          </h2>
          <p className='text-center text-lg leading-relaxed text-slate-600'>
            {t('alumni_legacy_description')}
          </p>
        </div>
      </section>

      {/* Internship Programs */}
      <section className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('internship_program_title')}
          </h2>
          <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-1'>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-green-800'>
                {t('internship_opportunity_title')}
              </h3>
              <p className='text-slate-600'>
                {t('internship_opportunity_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-green-800'>
                {t('mentorship_program_title')}
              </h3>
              <p className='text-slate-600'>
                {t('mentorship_program_description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className='py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('why_work_with_us_title')}
          </h2>
          <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1'>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50'>
                <span className='text-2xl font-bold text-green-800'>#1</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('satisfaction_title')}
              </h3>
              <p className='text-slate-600'>{t('satisfaction_description')}</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50'>
                <span className='text-2xl font-bold text-green-800'>95%</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('perks_title')}
              </h3>
              <p className='text-slate-600'>{t('perks_description')}</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50'>
                <span className='text-2xl font-bold text-green-800'>100+</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('alumni_title')}
              </h3>
              <p className='text-slate-600'>{t('alumni_description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
