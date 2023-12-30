import React from 'react'
import { useTranslation } from 'react-i18next'
import { Badge } from 'primereact/badge'
import services, { extraServices } from '../constants/services'
import Service from '../components/cards/Service'

const Services = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div>
        <p className="text-center sm:text-left text-4xl font-semibold">
          {t('home.services.heading_p1')}{' '}
          <span className="text-baseColor">
            {t('home.services.heading_p2')}
          </span>
        </p>
      </div>
      <div className="flex justify-center sm:justify-start flex-wrap gap-4 mb-8">
        {extraServices.map((service, key) => {
          return <Badge key={key} value={service} />
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 h-2/3">
        {services.map((service, key) => {
          return <Service key={key} {...service} />
        })}
        <div></div>
        {/* <p className="font-bold text-8xl leading-3" style={{ lineHeight: '0' }}>
          24 <span className="text-baseColor">X</span> 7
        </p> */}
      </div>
    </div>
  )
}

export default Services
