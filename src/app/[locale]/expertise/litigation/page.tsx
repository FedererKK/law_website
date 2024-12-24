import { useTranslations } from 'next-intl'

export default function Litigation() {
  const t = useTranslations('')

  return (
    <div className='px-8 py-24'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-red-800 to-red-600 py-16 text-center text-white'>
        <h1 className='mb-4 text-5xl font-bold'>{t('litigation_title')}</h1>
        <p className='mx-auto max-w-3xl text-lg'>
          {t('litigation_description')}
        </p>
      </section>

      {/* Key Areas of Expertise */}
      <section className='py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('key_expertise_title')}
          </h2>
          <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1'>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-red-800'>
                {t('commercial_disputes_title')}
              </h3>
              <p className='text-slate-600'>
                {t('commercial_disputes_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-red-800'>
                {t('intellectual_property_title')}
              </h3>
              <p className='text-slate-600'>
                {t('intellectual_property_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-red-800'>
                {t('international_arbitration_title')}
              </h3>
              <p className='text-slate-600'>
                {t('international_arbitration_description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('litigation_process_title')}
          </h2>
          <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-1'>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-red-800'>
                {t('case_preparation_title')}
              </h3>
              <p className='text-slate-600'>
                {t('case_preparation_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-red-800'>
                {t('representation_title')}
              </h3>
              <p className='text-slate-600'>
                {t('representation_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-red-800'>
                {t('negotiation_title')}
              </h3>
              <p className='text-slate-600'>{t('negotiation_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-red-800'>
                {t('resolution_title')}
              </h3>
              <p className='text-slate-600'>{t('resolution_description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('why_choose_us_title')}
          </h2>
          <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1'>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50'>
                <span className='text-2xl font-bold text-red-800'>#1</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('global_leaders_title')}
              </h3>
              <p className='text-slate-600'>
                {t('global_leaders_description')}
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50'>
                <span className='text-2xl font-bold text-red-800'>200+</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('cases_won_title')}
              </h3>
              <p className='text-slate-600'>{t('cases_won_description')}</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50'>
                <span className='text-2xl font-bold text-red-800'>95%</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('client_satisfaction_title')}
              </h3>
              <p className='text-slate-600'>
                {t('client_satisfaction_description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
