import { useTranslations } from 'next-intl'

export default function Insights() {
  const t = useTranslations('')

  return (
    <div className='px-8 py-24'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-900 to-blue-600 py-16 text-center text-white'>
        <h1 className='mb-4 text-5xl font-bold'>{t('insights_title')}</h1>
        <p className='mx-auto max-w-3xl text-lg'>{t('insights_description')}</p>
      </section>

      {/* Featured Insights */}
      <section className='py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('featured_insights_title')}
          </h2>
          <div className='grid grid-cols-3 gap-8 max-lg:grid-cols-1'>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('insight_one_title')}
              </h3>
              <p className='text-slate-600'>{t('insight_one_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('insight_two_title')}
              </h3>
              <p className='text-slate-600'>{t('insight_two_description')}</p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md'>
              <h3 className='mb-2 text-2xl font-semibold text-blue-800'>
                {t('insight_three_title')}
              </h3>
              <p className='text-slate-600'>{t('insight_three_description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900'>
            {t('did_you_know_title')}
          </h2>
          <div className='grid grid-cols-2 gap-8 max-lg:grid-cols-1'>
            <div className='flex items-start gap-4'>
              <div className='rounded-lg bg-blue-50 p-4'>
                <span className='text-3xl font-bold text-blue-800'>1</span>
              </div>
              <p className='text-lg text-slate-600'>{t('finance_fact_one')}</p>
            </div>
            <div className='flex items-start gap-4'>
              <div className='rounded-lg bg-blue-50 p-4'>
                <span className='text-3xl font-bold text-blue-800'>2</span>
              </div>
              <p className='text-lg text-slate-600'>{t('finance_fact_two')}</p>
            </div>
            <div className='flex items-start gap-4'>
              <div className='rounded-lg bg-blue-50 p-4'>
                <span className='text-3xl font-bold text-blue-800'>3</span>
              </div>
              <p className='text-lg text-slate-600'>
                {t('finance_fact_three')}
              </p>
            </div>
            <div className='flex items-start gap-4'>
              <div className='rounded-lg bg-blue-50 p-4'>
                <span className='text-3xl font-bold text-blue-800'>4</span>
              </div>
              <p className='text-lg text-slate-600'>{t('finance_fact_four')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
