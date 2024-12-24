import { useTranslations } from 'next-intl'

export default function FinancialTransactions() {
  const t = useTranslations('')

  return (
    <div className='px-8 py-24'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-green-800 to-green-600 py-16 text-center text-white'>
        <h1 className='mb-4 text-5xl font-bold'>
          {t('financial_transactions_title')}
        </h1>
        <p className='mx-auto max-w-3xl text-lg'>
          {t('financial_transactions_description')}
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
              <h3 className='mb-2 text-2xl font-semibold text-green-800'>
                {t('capital_markets_title')}
              </h3>
              <p className='text-slate-600'>
                {t('capital_markets_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-green-800'>
                {t('debt_restructuring_title')}
              </h3>
              <p className='text-slate-600'>
                {t('debt_restructuring_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-green-800'>
                {t('private_equity_title')}
              </h3>
              <p className='text-slate-600'>
                {t('private_equity_description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('transaction_process_title')}
          </h2>
          <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-1'>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-green-800'>
                {t('market_analysis_title')}
              </h3>
              <p className='text-slate-600'>
                {t('market_analysis_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-green-800'>
                {t('deal_structuring_title')}
              </h3>
              <p className='text-slate-600'>
                {t('deal_structuring_description')}
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-green-800'>
                {t('financing_title')}
              </h3>
              <p className='text-slate-600'>{t('financing_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-2xl font-semibold text-green-800'>
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
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50'>
                <span className='text-2xl font-bold text-green-800'>#1</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('global_leaders_title')}
              </h3>
              <p className='text-slate-600'>
                {t('global_leaders_description')}
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50'>
                <span className='text-2xl font-bold text-green-800'>300+</span>
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {t('deals_closed_title')}
              </h3>
              <p className='text-slate-600'>{t('deals_closed_description')}</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50'>
                <span className='text-2xl font-bold text-green-800'>$3T+</span>
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
