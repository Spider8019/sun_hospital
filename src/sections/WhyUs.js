import React from 'react'
import { useTranslation } from 'react-i18next'

const WhyUs = () => {
  const { t } = useTranslation()
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 sm:gap-20 items-center">
      <div>
        <p className=" text-center sm:text-left text-4xl font-semibold">
          {t('home.why_us.heading')}{' '}
          <span className="text-baseColor">{t('hospital_name')}</span>
        </p>
        <p className="text-center sm:text-left sm:text-default">
          {t('home.why_us.body')}
        </p>
      </div>
      <div className="w-full h-80 overflow-hidden">
        <img
          className="w-full h-full rounded-xl object-cover"
          src="https://i.pinimg.com/originals/7f/c6/ad/7fc6adc5b6d43fc28df9b483d4e46abc.png"
          alt="Why us banner"
        />
      </div>
    </div>
  )
}

export default WhyUs
