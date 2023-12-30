import React from 'react'
import PrivacyPolicy from '../sections/PrivacyPolicy'
import ContactUs from '../sections/ContactUs'

const Others = () => {
  return (
    <React.Fragment>
      <div className="sm:p-20" id="contact">
        <ContactUs />
      </div>
      <div className="sm:p-20" id="privacyPolicy">
        <PrivacyPolicy />
      </div>
    </React.Fragment>
  )
}

export default Others
