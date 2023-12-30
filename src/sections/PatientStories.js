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
        <p className="text-xl font-semibold">Our Patient's Stories</p>
        <Button label={'View All'} outlined />
      </div>
    </div>
  )
}

export default PatientStories
