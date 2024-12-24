import { useTranslations } from 'next-intl'
import Button from './components/Button'
import { BarChart3, Globe2, Shield, Building } from 'lucide-react'

export default function HomePage() {
  const t = useTranslations('')
  return (
    <div>
      <section
        className='relative flex h-screen flex-col items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage: "url('home.jpg')"
        }}
      >
        {/* Overlay for readability */}
        <div className='absolute inset-0 bg-white bg-opacity-20'></div>

        {/* Content */}
        <div className='relative z-10 flex flex-col items-center text-center'>
          <h1 className='max-w-4xl text-7xl font-extrabold leading-tight text-white'>
            {t('global_excellence_in')}{' '}
            <span className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
              {t('complex_legal_solutions')}
            </span>
          </h1>
          <div className='my-8 max-w-3xl px-8 text-2xl text-gray-200'>
            {t('main_description')}
          </div>
          <div className='mt-6 flex flex-row gap-6'>
            {/* <Button
              rounded
              size='large'
              variant='secondary'
              className='border-blue-500 font-bold text-white hover:bg-blue-600'
            >
              {t('our_global_offices')}
            </Button> */}
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-b from-white to-slate-50 py-24'>
        <div className='mx-auto grid max-w-screen-xl grid-cols-3 gap-12 px-8 py-5 max-lg:grid-cols-1'>
          <div className='rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md'>
            <h2 className='mb-4 text-2xl font-semibold text-slate-900'>
              {t('cross_border_transactions')}
            </h2>
            <p className='text-slate-600 max-lg:max-w-[500px]'>
              {t('cross_border_description')}
            </p>
          </div>
          <div className='rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md'>
            <h2 className='mb-4 text-2xl font-semibold text-slate-900'>
              {t('high_stakes_litigation')}
            </h2>
            <p className='text-slate-600 max-lg:max-w-[500px]'>
              {t('litigation_description')}
            </p>
          </div>
          <div className='rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md'>
            <h2 className='mb-4 text-2xl font-semibold text-slate-900'>
              {t('financial_solutions')}
            </h2>
            <p className='text-slate-600 max-lg:max-w-[500px]'>
              {t('financial_description')}
            </p>
          </div>
        </div>
      </section>

      <section className='bg-blue-900 py-16 text-white'>
        <div className='mx-auto max-w-screen-xl px-8 text-center'>
          <h2 className='mb-6 text-3xl font-semibold'>
            {t('global_reach_title')}
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-blue-100'>
            {t('global_reach_description')}
          </p>
        </div>
      </section>

      {/* New Financial Expertise Section */}
      <section className='bg-white py-24'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <h2 className='mb-12 text-center text-4xl font-bold text-slate-900'>
            {t('financial_expertise_title')}
          </h2>
          <div className='grid grid-cols-2 gap-16 max-lg:grid-cols-1'>
            <div className='space-y-8'>
              <div className='flex items-start gap-4'>
                <div className='rounded-lg bg-blue-50 p-3'>
                  <BarChart3 className='h-6 w-6 text-blue-800' />
                </div>
                <div>
                  <h3 className='mb-2 text-xl font-semibold text-slate-900'>
                    {t('market_analysis_title')}
                  </h3>
                  <p className='text-slate-600'>
                    {t('market_analysis_description')}
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='rounded-lg bg-blue-50 p-3'>
                  <Globe2 className='h-6 w-6 text-blue-800' />
                </div>
                <div>
                  <h3 className='mb-2 text-xl font-semibold text-slate-900'>
                    {t('regulatory_compliance_title')}
                  </h3>
                  <p className='text-slate-600'>
                    {t('regulatory_compliance_description')}
                  </p>
                </div>
              </div>
            </div>
            <div className='space-y-8'>
              <div className='flex items-start gap-4'>
                <div className='rounded-lg bg-blue-50 p-3'>
                  <Shield className='h-6 w-6 text-blue-800' />
                </div>
                <div>
                  <h3 className='mb-2 text-xl font-semibold text-slate-900'>
                    {t('risk_management_title')}
                  </h3>
                  <p className='text-slate-600'>
                    {t('risk_management_description')}
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='rounded-lg bg-blue-50 p-3'>
                  <Building className='h-6 w-6 text-blue-800' />
                </div>
                <div>
                  <h3 className='mb-2 text-xl font-semibold text-slate-900'>
                    {t('corporate_governance_title')}
                  </h3>
                  <p className='text-slate-600'>
                    {t('corporate_governance_description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Client Trust Section */}
      <section className='bg-gradient-to-b from-slate-50 to-white py-24'>
        <div className='mx-auto max-w-screen-xl px-8'>
          <div className='grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1'>
            <div>
              <h2 className='mb-6 text-4xl font-bold text-slate-900'>
                {t('trusted_advisors_title')}
              </h2>
              <p className='mb-8 text-lg text-slate-600'>
                {t('trusted_advisors_description')}
              </p>
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-800'>
                    50+
                  </div>
                  <div>
                    <h4 className='font-semibold text-slate-900'>
                      {t('global_partners')}
                    </h4>
                    <p className='text-sm text-slate-600'>
                      {t('global_partners_description')}
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-800'>
                    20+
                  </div>
                  <div>
                    <h4 className='font-semibold text-slate-900'>
                      {t('years_experience')}
                    </h4>
                    <p className='text-sm text-slate-600'>
                      {t('years_experience_description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white'>
                <h3 className='mb-2 text-2xl font-bold'>$50B+</h3>
                <p className='text-blue-100'>{t('transactions_value')}</p>
              </div>
              <div className='rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 p-6 text-white'>
                <h3 className='mb-2 text-2xl font-bold'>100+</h3>
                <p className='text-slate-100'>{t('fortune_500_clients')}</p>
              </div>
              <div className='rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 p-6 text-white'>
                <h3 className='mb-2 text-2xl font-bold'>25+</h3>
                <p className='text-slate-100'>{t('countries_served')}</p>
              </div>
              <div className='rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white'>
                <h3 className='mb-2 text-2xl font-bold'>500+</h3>
                <p className='text-blue-100'>{t('deals_closed')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
