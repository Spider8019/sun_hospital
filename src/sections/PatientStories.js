import React from 'react'
import PatientReviews from '../components/carousels/PatientReviews'
import { Button } from 'primereact/button'

const PatientStories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[0.75fr,0.25fr] gap-8 sm:gap-20 items-center">
      <div className='order-last sm:order-first'>
        <PatientReviews />
      </div>
      <div className='text-center sm:text-right'>
        <p className="text-xl font-semibold">Social Recognition</p>
        <p>Our unique model has been recognized by more than 10 social influencers. Some celebrities also came forward to provide a helping hand to those in need.</p>
        <Button label={'View All'} outlined />
      </div>
    </div>
  )
}

export default PatientStories
