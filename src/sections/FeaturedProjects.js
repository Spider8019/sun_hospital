import React from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../components/cards/ProductCard'
import { useProductContext } from '../context/productContext'

const YourDoctors = () => {
  const { isLoading, featuredProducts } = useProductContext()
  const { t } = useTranslation()

  if(isLoading){
    return <p>Loading</p>
  } 
  console.log(featuredProducts)
  return (
    <div className="text-center sm:text-left">
      <div>
        <p className="text-4xl font-semibold">
          {t('home.your_doctors.heading_p1')}{' '}
          <span className="text-baseColor">
            {t('home.your_doctors.heading_p2')}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8">
        {featuredProducts.map((doctor) => {
          return <ProductCard {...doctor} key={doctor.key} />
        })}
      </div>
    </div>
  )
}

export default YourDoctors
