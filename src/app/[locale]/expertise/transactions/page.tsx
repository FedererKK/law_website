import { useTranslations } from 'next-intl'

export default function CrossBorderTransactions() {
  const t = useTranslations('')

  return (
    <div className='px-8 py-24'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-800 to-blue-600 py-16 text-center text-white'>
        <h1 className='mb-4 text-5xl font-bold'>
          {t('cross_border_transactions_title')}
        </h1>
        <p className='mx-auto max-w-3xl text-lg'>
          {t('cross_border_transactions_description')}
        </p>
      </section>

      {/* Key Areas of Expertise */}
      <section className='py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('key_areas_title')}
          </h2>
          <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1'>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('mergers_and_acquisitions_title')}
              </h3>
              <p className='text-slate-600'>
                {t('mergers_and_acquisitions_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('regulatory_compliance_title')}
              </h3>
              <p className='text-slate-600'>
                {t('regulatory_compliance_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('risk_management_title')}
              </h3>
              <p className='text-slate-600'>
                {t('risk_management_description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('our_process_title')}
          </h2>
          <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-1'>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('due_diligence_title')}
              </h3>
              <p className='text-slate-600'>{t('due_diligence_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('negotiation_title')}
              </h3>
              <p className='text-slate-600'>{t('negotiation_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('structuring_title')}
              </h3>
              <p className='text-slate-600'>{t('structuring_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('execution_title')}
              </h3>
              <p className='text-slate-600'>{t('execution_description')}</p>
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
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50'>
                <span className='text-2xl font-bold text-blue-800'>#1</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('experience_title')}
              </h3>
              <p className='text-slate-600'>{t('experience_description')}</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50'>
                <span className='text-2xl font-bold text-blue-800'>50+</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('global_offices_title')}
              </h3>
              <p className='text-slate-600'>
                {t('global_offices_description')}
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50'>
                <span className='text-2xl font-bold text-blue-800'>$2T+</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('transaction_volume_title')}
              </h3>
              <p className='text-slate-600'>
                {t('transaction_volume_description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
