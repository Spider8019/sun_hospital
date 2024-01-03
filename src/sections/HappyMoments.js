import React from 'react'
import { useTranslation } from 'react-i18next'

const HappyMoments = () => {
  const { t } = useTranslation()
  return (
    <div className="">
      <div>
        <p className="text-4xl font-semibold">
          {t('home.happy_moments.heading_p1')}{' '}
          <span className="text-baseColor">
            {t('home.happy_moments.heading_p2')}
          </span>
        </p>{' '}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        <div className="w-full h-60">
          <img
            className="w-full h-full object-cover block rounded-xl shadow"
            src="https://i.pinimg.com/originals/43/ed/5b/43ed5b114551f4b9b3ae38260d4fb772.png"
            alt="Moments 1 Sun Hospital Ayodhya"
          />
        </div>
        <div className="w-full h-60">
          <img
            className="w-full h-full object-cover block rounded-xl shadow "
            src="https://i.pinimg.com/originals/3c/0f/3d/3c0f3d052f77dcfb1dc6b9f65794210b.png"
            alt="Moments 2 Sun Hospital Ayodhya"
          />
        </div>
        <div className="w-full h-60">
          <img
            className="w-full h-full object-cover block rounded-xl shadow "
            src="https://i.pinimg.com/originals/6a/a3/70/6aa37014a490f2ca1606b15d8843a1d2.jpg"
            alt="Moments 3 Sun Hospital Ayodhya"
          />
        </div>
      </div>
    </div>
  )
}

export default HappyMoments
