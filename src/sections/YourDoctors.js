import React from 'react'
import doctors from '../constants/doctors'
import { useTranslation } from 'react-i18next'
import { Card } from 'primereact/card'
import Doctor from '../components/cards/Doctor'

const YourDoctors = () => {
  const { t } = useTranslation()
  return (
    <div className='text-center sm:text-left'>
      <div>
        <p className='text-4xl font-semibold'>
          {t('home.your_doctors.heading_p1')}{' '}
          <span className='text-baseColor'>{t('home.your_doctors.heading_p2')}</span>
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8'>
        {doctors.map((doctor)=>{
          return <Doctor {...doctor} key={doctor.key}/>
        })}
      </div>
    </div>
  )
}

export default YourDoctors
