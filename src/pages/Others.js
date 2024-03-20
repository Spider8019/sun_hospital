import React from 'react'
import PrivacyPolicy from '../sections/PrivacyPolicy'
import ContactUs from '../sections/ContactUs'

const Others = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-col '>
      <div className="sm:p-20 p-4" id="contact">
        <ContactUs />
      </div>
      <div className="sm:p-20 p-4" id="privacyPolicy">
        <PrivacyPolicy />
      </div>
    </div>
  )
}

export default Others
